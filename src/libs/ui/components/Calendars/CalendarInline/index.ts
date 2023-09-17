import { CalendarItem, CalendarItemProps } from "../share";
import { CalendarInlineComponent } from "./CalendarInline";

export type { CalendarInlineProps } from "./CalendarInline";
export type CalendarInlineItemProps = CalendarItemProps;
export const CalendarInline = Object.assign(CalendarInlineComponent, {
    Item: CalendarItem,
});
