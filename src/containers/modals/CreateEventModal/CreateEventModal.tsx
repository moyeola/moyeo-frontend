import { useRecoilState } from "recoil";
import { createEventModalStateAtom } from "./state/createEventModal.state";
import { SelectGroupContainer } from "./containers/SelectGroup/SelectGroup.container";
import { useEffect } from "react";
import { WriteInfoContainer } from "./containers/WriteInfo/WriteInfo";

export function CreateEventModal() {
    const [step, setStep] = useRecoilState(createEventModalStateAtom);

    useEffect(() => {
        setStep({
            step: "selectGroup",
        });
    }, [setStep]);

    switch (step.step) {
        case "selectGroup":
            return <SelectGroupContainer />;
        case "writeInfo":
            return <WriteInfoContainer />;
        default:
            break;
    }
}
