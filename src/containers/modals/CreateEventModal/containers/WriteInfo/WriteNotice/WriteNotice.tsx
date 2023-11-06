import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { createEventDataAtom } from "../../../state/createEventInfo.state";
import { createEventWriteInfoModeAtom } from "../WriteInfoMode.state";
import { Flex, Picker, PickerColumn } from "../../../../../../libs/ui";
import { IconButton, StyledInput } from "../WriteInfo.style";
import { BellSimple, Calendar, MapPin } from "@phosphor-icons/react";
import { cv } from "../../../../../../libs/ui/style";
import dayjs from "dayjs";
import { CreateEventButton } from "../CreateButton";
import {
    amPmOptions,
    hourOptions,
    minuteOptions,
    useTimePicker,
} from "../../../../../../hooks/useTimePicker";

export function WriteNoticeContainer() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [event] = useRecoilState(createEventDataAtom);
    const [, setMode] = useRecoilState(createEventWriteInfoModeAtom);

    const [result, time, setHour, setAmPm, setMinute] = useTimePicker();

    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    }, []);

    return (
        <Flex.Column gap="4px">
            <StyledInput
                placeholder="일정 명을 입력해주세요."
                value={event.title}
                readOnly
                onClick={() => setMode("title")}
            />

            <Flex.Between>
                <Flex.Row gap="8px">
                    <IconButton onClick={() => setMode("date")}>
                        <Calendar size={22} weight="fill" color={cv.gray04} />
                        {`${dayjs(
                            event.start?.date || event.start?.dateTime
                        ).format("M월 D일")}${
                            event.end
                                ? ` ~ ${dayjs(
                                      event.end?.date || event.end?.dateTime
                                  ).format("M월 D일")}`
                                : ""
                        }`}
                    </IconButton>
                    <IconButton onClick={() => setMode("notice")}>
                        <BellSimple size={22} weight="fill" color={cv.gray03} />
                    </IconButton>
                    <IconButton onClick={() => setMode("location")}>
                        <MapPin size={22} weight="fill" color={cv.gray04} />
                    </IconButton>
                </Flex.Row>
                <CreateEventButton />
            </Flex.Between>

            <Flex.Column gap="4px">
                {/* <Flex.Row gap="8px">
                    <DateInputLabel>알림</DateInputLabel>
                    <DateInput type="time" ref={inputRef} />
                </Flex.Row> */}
                <Picker style={{ width: "100%" }}>
                    <PickerColumn
                        options={hourOptions}
                        value={result.hour}
                        onChange={(e) => setHour(+e.target.value)}
                    />
                    <PickerColumn
                        options={minuteOptions}
                        value={result.minute}
                        onChange={(e) => setMinute(+e.target.value)}
                    />
                    <PickerColumn
                        options={amPmOptions}
                        value={result.amPm}
                        onChange={(e) => setAmPm(e.target.value)}
                    />
                </Picker>
            </Flex.Column>
        </Flex.Column>
    );
}
