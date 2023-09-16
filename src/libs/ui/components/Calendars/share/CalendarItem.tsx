import dayjs from "dayjs";
import {
    StyledCalendarItem,
    StyledCalendarItemDay,
    StyledCalendarItemDayOfTheWeek,
    StyledCalendarItemEvent,
    StyledCalendarItemEvents,
} from "./CalendarItem.style";

const dayOfTheWeekMap = (dotw: string) => {
    switch (dotw) {
        case "Mon":
            return "월";
        case "Tue":
            return "화";
        case "Wed":
            return "수";
        case "Thu":
            return "목";
        case "Fri":
            return "금";
        case "Sat":
            return "토";
        case "Sun":
            return "일";
        default:
            return "";
    }
};

export interface CalendarItemProps {
    onClick?: () => void;
    date: string;
    events: {
        title: string;
    }[];
    showDayOfTheWeek?: boolean;
}
export function CalendarItem({
    date,
    events,
    onClick,
    showDayOfTheWeek = false,
}: CalendarItemProps) {
    const _date = dayjs(date);
    const day = _date.format("D");
    const dayOfTheWeek = dayOfTheWeekMap(_date.format("ddd"));

    return (
        <StyledCalendarItem onClick={() => onClick && onClick()}>
            {showDayOfTheWeek && (
                <StyledCalendarItemDayOfTheWeek>
                    {dayOfTheWeek}
                </StyledCalendarItemDayOfTheWeek>
            )}
            <StyledCalendarItemDay>{day}</StyledCalendarItemDay>
            <StyledCalendarItemEvents>
                {events.map((event, index) => {
                    return (
                        <StyledCalendarItemEvent key={index}>
                            {event.title}
                        </StyledCalendarItemEvent>
                    );
                })}
            </StyledCalendarItemEvents>
        </StyledCalendarItem>
    );
}
