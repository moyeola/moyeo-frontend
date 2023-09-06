import { atom } from "recoil";

type Step = "selectGroup" | "writeInfo";

export const createEventModalStateAtom = atom<{
    step: Step;
}>({
    key: "createEventModalStateAtom",
    default: {
        step: "selectGroup",
    },
});
