import { useCalendarsEvent } from "../../hooks/useCalendarsEvent";
import { Calendar, useModal } from "../../libs/ui";
import { CalendarItemModal } from "../modals/CalendarItemModal/CalendarItemModal";

export function AllCalendar() {
    const modal = useModal();

    const { eventsSortByWeek } = useCalendarsEvent();

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
