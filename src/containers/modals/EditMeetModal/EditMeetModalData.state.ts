import { atom } from "recoil";

export type EditMeetModalData = {
    groupId?: number;
    id?: number;
    name?: string;
    description?: string;
    dates?: string[];
    startTimeAt?: string;
    endTimeAt?: string;
};

export const editMeetModalData = atom<EditMeetModalData>({
    key: "editMeetModalData",
    default: {},
});
