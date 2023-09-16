import { atom } from "recoil";
import { CreateMeetStep } from "./CreateMeetModal";

export const createMeetModalStep = atom<CreateMeetStep>({
    key: "createMeetModalStep",
    default: "name",
});
