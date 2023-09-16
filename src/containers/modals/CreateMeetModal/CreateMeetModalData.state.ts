import { atom } from "recoil";

export type CreateMeetModalData = {
    groupId?: number;
    name?: string;
    description?: string;
    dates?: string[];
    startTimeAt?: string;
    endTimeAt?: string;
};

export const createMeetModalData = atom<CreateMeetModalData>({
    key: "createMeetModalData",
    default: {},
});
