import { atom } from "recoil";

export const calendarFilterAtom = atom<{
    hiddenCalendarIds: number[];
}>({
    key: "calendarFilter",
    default: {
        hiddenCalendarIds: [],
    },
});
