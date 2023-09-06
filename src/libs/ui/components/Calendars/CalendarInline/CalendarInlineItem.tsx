import dayjs from "dayjs";
import {
    StyledCalendarInlineItem,
    StyledCalendarInlineItemDay,
    StyledCalendarInlineItemDayOfTheWeek,
    StyledCalendarInlineItemEvent,
    StyledCalendarInlineItemEvents,
} from "./CalendarInlineItem.style";

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

export interface CalendarInlineItemProps {
    onClick?: () => void;
    date: string;
    events: {
        title: string;
    }[];
}
export function CalendarInlineItem({
    date,
    events,
    onClick,
}: CalendarInlineItemProps) {
    const _date = dayjs(date);
    const day = _date.format("D");
    const dayOfTheWeek = dayOfTheWeekMap(_date.format("ddd"));

    return (
        <StyledCalendarInlineItem onClick={() => onClick && onClick()}>
            <StyledCalendarInlineItemDayOfTheWeek>
                {dayOfTheWeek}
            </StyledCalendarInlineItemDayOfTheWeek>
            <StyledCalendarInlineItemDay>{day}</StyledCalendarInlineItemDay>
            <StyledCalendarInlineItemEvents>
                {events.map((event, index) => {
                    return (
                        <StyledCalendarInlineItemEvent key={index}>
                            {event.title}
                        </StyledCalendarInlineItemEvent>
                    );
                })}
            </StyledCalendarInlineItemEvents>
        </StyledCalendarInlineItem>
    );
}
