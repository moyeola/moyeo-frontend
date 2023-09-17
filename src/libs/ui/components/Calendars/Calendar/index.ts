import { CalendarItem } from "../share";
import { Calendar as CalendarConponent, CalendarWeek } from "./Calendar";

export type { CalendarProps } from "./Calendar";
export type { CalendarWeekProps } from "./Calendar";
export type { CalendarItemProps } from "../share";
export const Calendar = Object.assign(CalendarConponent, {
    Item: CalendarItem,
    Week: CalendarWeek,
});
