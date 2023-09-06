import { useRecoilState } from "recoil";
import { Flex, Modal } from "../../../../../libs/ui";
import { StyledGroupButton } from "../../CreateEventModal.style";
import { createEventDataAtom } from "../../state/createEventInfo.state";
import { createEventModalStateAtom } from "../../state/createEventModal.state";

export function SelectGroupContainer() {
    const [, setEvent] = useRecoilState(createEventDataAtom);
    const [, setStep] = useRecoilState(createEventModalStateAtom);

    const selectGroup = (calendarId: number) => {
        setEvent((prev) => ({
            ...prev,
            calendarId,
        }));
        setStep({
            step: "writeInfo",
        });
    };

    return (
        <Modal>
            <Modal.Header>어떤 그룹의 일정인가요?</Modal.Header>
            <Modal.Body>
                <Flex.Column>
                    <StyledGroupButton onClick={() => selectGroup(1)}>
                        그룹 1
                    </StyledGroupButton>
                    <StyledGroupButton onClick={() => selectGroup(2)}>
                        그룹 2
                    </StyledGroupButton>
                    <StyledGroupButton onClick={() => selectGroup(3)}>
                        그룹 3
                    </StyledGroupButton>
                    <StyledGroupButton onClick={() => selectGroup(4)}>
                        그룹 4
                    </StyledGroupButton>
                    <StyledGroupButton onClick={() => selectGroup(5)}>
                        그룹 5
                    </StyledGroupButton>
                </Flex.Column>
            </Modal.Body>
        </Modal>
    );
}
