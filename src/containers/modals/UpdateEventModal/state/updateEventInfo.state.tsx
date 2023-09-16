import dayjs from "dayjs";
import { atom } from "recoil";

type UpdateEventData = {
    eventId: number;
    calendarId?: number;
    title?: string;
    description?: string;
    location?: string;
    isOnline: boolean;
    start: {
        date?: string;
        dateTime?: string;
    };
    end?: {
        date?: string;
        dateTime?: string;
    };
};

export const updateEventDataAtom = atom<UpdateEventData>({
    key: "updateEventDataAtom",
    default: {
        eventId: -1,
        isOnline: false,
        start: {
            dateTime: dayjs().add(1, "h").format("YYYY-MM-DDTHH:00"),
        },
    },
});
