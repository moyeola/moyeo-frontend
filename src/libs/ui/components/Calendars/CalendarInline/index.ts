import { CalendarInlineComponent } from "./CalendarInline";
import { CalendarInlineItem } from "./CalendarInlineItem";

export type { CalendarInlineProps } from "./CalendarInline";
export type { CalendarInlineItemProps } from "./CalendarInlineItem";
export const CalendarInline = Object.assign(CalendarInlineComponent, {
    Item: CalendarInlineItem,
});
