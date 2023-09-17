import { atom } from "recoil";
import { EditMeetStep } from "./EditMeetModal";

export const editMeetModalStep = atom<EditMeetStep>({
    key: "editMeetModalStep",
    default: "name",
});
