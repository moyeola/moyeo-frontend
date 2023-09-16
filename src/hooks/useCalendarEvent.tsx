import { useQuery } from "react-query";
import { client } from "../libs/api";
import dayjs from "dayjs";

export type UseCalendarEventOptions = {
    period?: number;
    start?: string;
    enabled?: boolean;
};

export function useCalendarEvent(
    calendarId: number,
    options?: UseCalendarEventOptions
) {
    const { period = 21, start: optionStart, enabled = true } = options || {};

    const { data: calendar, isLoading: isCalendarLoading } = useQuery(
        ["calendar", calendarId],
        async () => {
            const res = await client.calendars.get({
                calendarId: calendarId,
            });
            return res.calendar;
        },
        {
            enabled: enabled || calendarId !== -1,
        }
    );

    const start = dayjs(optionStart).startOf("week") || dayjs().startOf("week");
    const end = start.add(period, "days");

    const { data: events, isLoading: isEventsLoading } = useQuery(
        ["calendar", calendar?.id, "events"],
        async () => {
            const res = await client.calendars.event.list({
                calendarId: calendarId,
                start: start.toISOString(),
                end: end.toISOString(),
            });
            return res.events.map((event) => ({
                ...event,
                calendar,
            }));
        },
        {
            enabled,
        }
    );

    const eventsSortByDay = Array.from({ length: period }).map((_, i) => ({
        date: start.add(i + 1, "day").toISOString(),
        events:
            events?.filter((event) =>
                dayjs(event.start?.date || event.start?.dateTime).isSame(
                    start.add(i + 1, "day"),
                    "day"
                )
            ) || [],
    }));

    const eventsSortByWeek = Array.from({ length: period / 7 }).map((_, i) => ({
        week: i,
        days: eventsSortByDay.slice(i * 7, (i + 1) * 7),
    }));

    return {
        calendar,
        events,
        eventsSortByDay,
        eventsSortByWeek,
        isLoading: isCalendarLoading || isEventsLoading,
    };
}
