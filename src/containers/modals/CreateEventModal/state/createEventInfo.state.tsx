import dayjs from "dayjs";
import { atom } from "recoil";

type CreateEventData = {
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

export const createEventDataAtom = atom<CreateEventData>({
    key: "createEventDataAtom",
    default: {
        isOnline: false,
        start: {
            dateTime: dayjs().add(1, "h").format("YYYY-MM-DDTHH:00"),
        },
    },
});
