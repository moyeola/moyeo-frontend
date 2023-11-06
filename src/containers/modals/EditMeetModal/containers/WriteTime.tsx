import { useRecoilState } from "recoil";
import { editMeetModalStep } from "../EditMeetModalStep.state";
import { editMeetModalData } from "../EditMeetModalData.state";
import {
    Flex,
    Modal,
    Picker,
    PickerColumn,
    Span,
    Text,
} from "../../../../libs/ui";
import { ArrowLeft, Plus } from "@phosphor-icons/react";
import { useCreateMeet } from "../useEditMeet";
import {
    amPmOptions,
    hourOptions,
    useTimePicker,
} from "../../../../hooks/useTimePicker";
import { useEffect } from "react";

export function WriteTimeContainer() {
    const [, setStep] = useRecoilState(editMeetModalStep);
    const [meet, setMeet] = useRecoilState(editMeetModalData);
    const { editMeet, isLoading } = useCreateMeet();

    const [start, startTime, setStartHour, setStartAmPm] = useTimePicker(
        meet.startTimeAt
    );
    const [end, endTime, setEndHour, setEndAmPm] = useTimePicker(
        meet.endTimeAt
    );

    useEffect(() => {
        setMeet((prev) => ({
            ...prev,
            startTimeAt: startTime,
        }));
    }, [startTime, setMeet]);

    useEffect(() => {
        setMeet((prev) => ({
            ...prev,
            endTimeAt: endTime,
        }));
    }, [endTime, setMeet]);

    return (
        <Flex.Column gap="16px">
            <Flex.Between gap="0px">
                <Flex.Column style={{ flex: 1 }} gap="20px">
                    <Text align="center">
                        시작 시간
                        <br />
                        <Span size="12px">{start.text}</Span>
                    </Text>
                    <Picker style={{ width: "100%" }}>
                        <PickerColumn
                            options={hourOptions}
                            value={start.hour}
                            onChange={(e) => setStartHour(+e.target.value)}
                        />
                        <PickerColumn
                            options={amPmOptions}
                            value={start.amPm}
                            onChange={(e) => setStartAmPm(e.target.value)}
                        />
                    </Picker>
                </Flex.Column>
                <Flex.Column style={{ flex: 1 }} gap="20px">
                    <Text align="center">
                        종료 시간
                        <br />
                        <Span size="12px">{end.text}</Span>
                    </Text>
                    <Picker style={{ width: "100%" }}>
                        <PickerColumn
                            options={hourOptions}
                            value={end.hour}
                            onChange={(e) => setEndHour(+e.target.value)}
                        />
                        <PickerColumn
                            options={amPmOptions}
                            value={end.amPm}
                            onChange={(e) => setEndAmPm(e.target.value)}
                        />
                    </Picker>
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
