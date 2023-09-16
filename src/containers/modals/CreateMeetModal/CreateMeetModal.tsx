import { useRecoilState } from "recoil";
import { createMeetModalStep } from "./CreateMeetModalStep.state";
import { useEffect } from "react";
import { WriteNameContainer } from "./containers/WriteName";
import { WriteDatesContainer } from "./containers/WriteDates";
import { createMeetModalData } from "./CreateMeetModalData.state";
import { WriteTimeContainer } from "./containers/WriteTime";

export type CreateMeetStep = "name" | "dates" | "time";

export interface CreateMeetModalProps {
    groupId: number;
}
export function CreateMeetModal({ groupId }: CreateMeetModalProps) {
    const [step, setStep] = useRecoilState(createMeetModalStep);
    const [, setMeet] = useRecoilState(createMeetModalData);

    useEffect(() => {
        setStep("name");
        setMeet({
            groupId,
        });

        return () => {
            setStep("name");
            setMeet({});
        };
    }, [groupId, setMeet, setStep]);

    switch (step) {
        case "name":
            return <WriteNameContainer />;
        case "dates":
            return <WriteDatesContainer />;
        case "time":
            return <WriteTimeContainer />;
    }
}
