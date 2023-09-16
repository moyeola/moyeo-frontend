import { useQueries, useQuery } from "react-query";
import { client } from "../libs/api";
import dayjs from "dayjs";

export type UseCalendarsEventOptions = {
    period?: number;
    start?: string;
    calendarFilter?: {
        hiddenCalendarIds?: number[];
    };
};
export function useCalendarsEvent(options?: UseCalendarsEventOptions) {
    const { period = 28, start: optionStart, calendarFilter } = options || {};
    const start = dayjs(optionStart).startOf("week") || dayjs().startOf("week");
    const end = start.add(period, "days");
    const { data: calendars } = useQuery(["calendars"], async () => {
        const res = await client.calendars.list({});
        return res.calendars;
    });

    const calendarEventQueries = useQueries(
        calendars
            ?.filter(
                (calendar) =>
                    calendarFilter?.hiddenCalendarIds?.includes(calendar.id) !==
                    true
            )
            .map((calendar) => ({
                queryKey: ["calendars", calendar.id, "events"],
                queryFn: async () => {
                    const res = await client.calendars.event.list({
                        calendarId: calendar.id,
                        start: start.toISOString(),
                        end: end.toISOString(),
                    });
                    return res.events.map((event) => ({
                        ...event,
                        calendar,
                    }));
                },
            })) || []
    );

    const calendarsEvents = calendarEventQueries
        .map((query) => query.data || [])
        .filter((data) => !!data)
        .reduce((acc, cur) => {
            return [...acc, ...cur];
        }, []);

    const eventsSortByDay = Array.from({ length: period }).map((_, i) => ({
        date: start.add(i + 1, "day").toISOString(),
        events:
            calendarsEvents?.filter((event) =>
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
        calendars,
        calendarsEvents,
        eventsSortByDay,
        eventsSortByWeek,
    };
}
