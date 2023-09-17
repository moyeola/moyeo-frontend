import { useRecoilState } from "recoil";
import { editMeetModalStep } from "../EditMeetModalStep.state";
import { editMeetModalData } from "../EditMeetModalData.state";
import { Flex, Modal } from "../../../../libs/ui";
import { ArrowLeft, Plus } from "@phosphor-icons/react";
import styled from "styled-components";
import { cv } from "../../../../libs/ui/style";
import { useCreateMeet } from "../useEditMeet";

const StyledTimeInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${cv.gray02};
    font-size: 18px;

    &:focus {
        outline: none;
    }
`;

export function WriteTimeContainer() {
    const [, setStep] = useRecoilState(editMeetModalStep);
    const [meet, setMeet] = useRecoilState(editMeetModalData);
    const { editMeet, isLoading } = useCreateMeet();

    return (
        <Flex.Column gap="16px">
            <Flex.Between gap="16px">
                <Flex.Column style={{ flex: 1 }} gap="20px">
                    <Flex.Center>시작 시간</Flex.Center>
                    <StyledTimeInput
                        type="time"
                        value={meet.startTimeAt}
                        onChange={(e) =>
                            setMeet((prev) => ({
                                ...prev,
                                startTimeAt: e.target.value,
                            }))
                        }
                        max={meet.endTimeAt}
                        step="1800"
                    />
                </Flex.Column>
                <Flex.Column style={{ flex: 1 }} gap="20px">
                    <Flex.Center>종료 시간</Flex.Center>
                    <StyledTimeInput
                        type="time"
                        value={meet.endTimeAt}
                        onChange={(e) =>
                            setMeet((prev) => ({
                                ...prev,
                                endTimeAt: e.target.value,
                            }))
                        }
                        min={meet.startTimeAt}
                        step="1800"
                    />
                </Flex.Column>
            </Flex.Between>
            <Flex.Between gap="8px">
                <Modal.CircleButton onClick={() => setStep("dates")}>
                    <ArrowLeft weight="bold" />
                </Modal.CircleButton>

                <Modal.CircleButton
                    disabled={
                        !meet?.startTimeAt || !meet?.endTimeAt || isLoading
                    }
                    onClick={() => editMeet()}
                >
                    <Plus weight="bold" />
                </Modal.CircleButton>
            </Flex.Between>
        </Flex.Column>
    );
}
