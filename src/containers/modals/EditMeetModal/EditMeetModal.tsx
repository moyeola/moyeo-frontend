import { useRecoilState } from "recoil";
import { editMeetModalStep } from "./EditMeetModalStep.state";
import { useEffect } from "react";
import { WriteNameContainer } from "./containers/WriteName";
import { WriteDatesContainer } from "./containers/WriteDates";
import { editMeetModalData } from "./EditMeetModalData.state";
import { WriteTimeContainer } from "./containers/WriteTime";
import { MeetDto } from "moyeo-object";

export type EditMeetStep = "name" | "dates" | "time";

export interface EditMeetModalProps {
    meet: MeetDto;
}
export function EditMeetModal({ meet }: EditMeetModalProps) {
    const [step, setStep] = useRecoilState(editMeetModalStep);
    const [, setMeet] = useRecoilState(editMeetModalData);

    useEffect(() => {
        setStep("name");
        setMeet({
            dates: meet.dates,
            description: meet.description,
            endTimeAt: meet.endTimeAt,
            id: meet.id,
            groupId:
                meet.creator.type === "member"
                    ? meet.creator.member?.group?.id
                    : -1,
            name: meet.title,
            startTimeAt: meet.startTimeAt,
        });

        return () => {
            setStep("name");
            setMeet({});
        };
    }, [
        meet.creator,
        meet.dates,
        meet.description,
        meet.endTimeAt,
        meet.id,
        meet.startTimeAt,
        meet.title,
        setMeet,
        setStep,
    ]);

    switch (step) {
        case "name":
            return <WriteNameContainer />;
        case "dates":
            return <WriteDatesContainer />;
        case "time":
            return <WriteTimeContainer />;
    }
}
