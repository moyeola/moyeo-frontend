import { StyledCalendar, StyledCalendarWeek } from "./Calendar.style";

export interface CalendarProps {
    children?: React.ReactNode;
}
export function Calendar({ children }: CalendarProps) {
    return <StyledCalendar>{children}</StyledCalendar>;
}

export interface CalendarWeekProps {
    children?: React.ReactNode;
}

export function CalendarWeek({ children }: CalendarWeekProps) {
    return <StyledCalendarWeek>{children}</StyledCalendarWeek>;
}
