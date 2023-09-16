import { useCalendarsEvent } from "../../hooks/useCalendarsEvent";
import { CalendarInline, useModal } from "../../libs/ui";
import { CalendarItemModal } from "../modals/CalendarItemModal/CalendarItemModal";

export function AllWeekCalendar() {
    const modal = useModal();

    const { eventsSortByDay } = useCalendarsEvent({
        period: 7,
    });

    return (
        <CalendarInline>
            {eventsSortByDay.map((day) => (
                <CalendarInline.Item
                    key={day.date}
                    date={day.date}
                    events={day.events}
                    showDayOfTheWeek
                    onClick={() =>
                        modal.open(
                            <CalendarItemModal
                                date={day.date}
                                events={day.events}
                                nextAction="moveCalendar"
                            />
                        )
                    }
                />
            ))}
        </CalendarInline>
    );
}
