import { useRecoilState } from "recoil";
import { createMeetModalStep } from "../CreateMeetModalStep.state";
import { createMeetModalData } from "../CreateMeetModalData.state";
import {
    Flex,
    Modal,
    Picker,
    PickerColumn,
    Span,
    Text,
} from "../../../../libs/ui";
import { ArrowLeft, Plus } from "@phosphor-icons/react";
import { useCreateMeet } from "../useCreateMeet";
import { useEffect, useMemo, useState } from "react";

const amPmOptions = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
];

const hourOptions = [
    { label: "00", value: "00" },
    { label: "01", value: "01" },
    { label: "02", value: "02" },
    { label: "03", value: "03" },
    { label: "04", value: "04" },
    { label: "05", value: "05" },
    { label: "06", value: "06" },
    { label: "07", value: "07" },
    { label: "08", value: "08" },
    { label: "09", value: "09" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
];

const useTime = (initTime: string = "00:00") => {
    const [hour, setHour] = useState(+(initTime.split(":")[0] || 1) % 12);
    const [amPm, setAmPm] = useState(
        `${+initTime?.split(":")[0] >= 12 ? "PM" : "AM"}`
    );
    console.log("INIT", initTime, hour, amPm);

    const time = `${hour + (amPm === "PM" ? 12 : 0)}:00`.padStart(5, "0");
    const text =
        hour === 0
            ? amPm === "AM"
                ? "자정"
                : "정오"
            : `${amPm === "AM" ? "오전" : "오후"} ${hour}시`;

    const result = useMemo(
        () => ({
            hour: `${hour}`.padStart(2, "0"),
            amPm,
            text,
        }),
        [amPm, hour, text]
    );

    return [result, time, setHour, setAmPm] as const;
};

export function WriteTimeContainer() {
    const [, setStep] = useRecoilState(createMeetModalStep);
    const [meet, setMeet] = useRecoilState(createMeetModalData);
    const { createMeet, isLoading } = useCreateMeet();

    const [start, startTime, setStartHour, setStartAmPm] = useTime(
        meet.startTimeAt
    );
    const [end, endTime, setEndHour, setEndAmPm] = useTime(meet.endTimeAt);

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
                    onClick={() => createMeet()}
                >
                    <Plus weight="bold" />
                </Modal.CircleButton>
            </Flex.Between>
        </Flex.Column>
    );
}
