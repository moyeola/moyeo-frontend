import { useRecoilState } from "recoil";
import { editMeetModalStep } from "../EditMeetModalStep.state";
import { editMeetModalData } from "../EditMeetModalData.state";
import { Flex, Modal } from "../../../../libs/ui";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

export function WriteNameContainer() {
    const ref = useRef<HTMLInputElement>(null);
    const [, setStep] = useRecoilState(editMeetModalStep);
    const [meet, setMeet] = useRecoilState(editMeetModalData);

    useEffect(() => {
        ref.current!.focus();
    }, []);

    return (
        <Flex.Between gap="8px">
            <Modal.Input
                placeholder="일정 명을 입력해주세요."
                value={meet.name}
                onChange={(e) =>
                    setMeet((prev) => ({ ...prev, name: e.target.value }))
                }
                ref={ref}
                style={{
                    width: "100%",
                }}
                maxLength={30}
            />
            <Modal.CircleButton
                disabled={!meet.name}
                onClick={() => setStep("dates")}
            >
                <ArrowRight weight="bold" />
            </Modal.CircleButton>
        </Flex.Between>
    );
}
