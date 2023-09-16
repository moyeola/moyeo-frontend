import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { updateEventDataAtom } from "../../../state/updateEventInfo.state";
import { writeInfoModeAtom } from "../WriteInfoMode.state";
import { Flex } from "../../../../../../libs/ui";
import {
    DateInput,
    DateInputLabel,
    IconButton,
    StyledInput,
} from "../WriteInfo.style";
import { BellSimple, Calendar, MapPin } from "@phosphor-icons/react";
import { cv } from "../../../../../../libs/ui/style";
import dayjs from "dayjs";
import { UpdateEventButton } from "../UpdateButton";

export function WriteNoticeContainer() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [event] = useRecoilState(updateEventDataAtom);
    const [, setMode] = useRecoilState(writeInfoModeAtom);

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
                <UpdateEventButton />
            </Flex.Between>

            <Flex.Column gap="4px">
                <Flex.Row gap="8px">
                    <DateInputLabel>알림</DateInputLabel>
                    <DateInput type="time" ref={inputRef} />
                </Flex.Row>
            </Flex.Column>
        </Flex.Column>
    );
}
