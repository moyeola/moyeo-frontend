import { useQuery } from "react-query";
import { client } from "../../libs/api";
import { useCalendarEvent } from "../../hooks/useCalendarEvent";
import { Calendar, useModal } from "../../libs/ui";
import { CalendarItemModal } from "../modals/CalendarItemModal/CalendarItemModal";

export interface GroupCalendarProps {
    groupId: number;
}

export function GroupCalendar({ groupId }: GroupCalendarProps) {
    const modal = useModal();

    const { data: calendars } = useQuery(
        ["calendars", "group", groupId],
        async () => {
            const res = await client.calendars.search({
                ownerType: "group",
                ownerId: groupId,
            });
            return res.calendars;
        }
    );

    const { calendar, eventsSortByWeek } = useCalendarEvent(
        calendars?.[0].id || -1
    );

    return (
        <Calendar>
            {eventsSortByWeek.map((week) => (
                <Calendar.Week key={week.week}>
                    {week.days.map((day) => (
                        <Calendar.Item
                            key={day.date}
                            date={day.date}
                            events={day.events}
                            showDayOfTheWeek={week.week === 0}
                            onClick={() =>
                                modal.open(
                                    <CalendarItemModal
                                        nextAction="createEvent"
                                        date={day.date}
                                        events={day.events}
                                        fromCalendarId={calendar?.id}
                                    />
                                )
                            }
                        />
                    ))}
                </Calendar.Week>
            ))}
        </Calendar>
    );
}
