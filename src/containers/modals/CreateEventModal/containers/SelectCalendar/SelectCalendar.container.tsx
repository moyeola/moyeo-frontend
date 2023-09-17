import { useRecoilState } from "recoil";
import { Flex, Modal } from "../../../../../libs/ui";
import { StyledGroupButton } from "../../CreateEventModal.style";
import { createEventDataAtom } from "../../state/createEventInfo.state";
import { createEventModalStateAtom } from "../../state/createEventModal.state";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";

export function SelectCalendarContainer() {
    const [, setEvent] = useRecoilState(createEventDataAtom);
    const [, setStep] = useRecoilState(createEventModalStateAtom);

    const { data: calendars } = useQuery(["calendars"], async () => {
        const res = await client.calendars.list({});
        return res.calendars;
    });
    const selectCalendar = (calendarId: number) => {
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
            <Modal.Header>어떤 캘린더에 추가하시겠어요?</Modal.Header>
            <Modal.Body>
                <Flex.Column>
                    {calendars?.map((calendar) => (
                        <StyledGroupButton
                            key={calendar?.id || -1}
                            onClick={() => selectCalendar(calendar?.id || -1)}
                        >
                            {calendar?.name || -1}
                        </StyledGroupButton>
                    ))}
                </Flex.Column>
            </Modal.Body>
        </Modal>
    );
}
