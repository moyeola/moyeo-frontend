import { StyledCalendarInline } from "./CalendarInline.style";

export interface CalendarInlineProps {
    children?: React.ReactNode;
}
export function CalendarInlineComponent({ children }: CalendarInlineProps) {
    return <StyledCalendarInline>{children}</StyledCalendarInline>;
}
