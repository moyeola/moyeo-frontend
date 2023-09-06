import {
    ArrowRight,
    BellSimple,
    Calendar,
    MapPin,
} from "@phosphor-icons/react";
import { Flex } from "../../../../../../libs/ui";
import { IconButton, NextButton, StyledInput } from "../WriteInfo.style";
import { cv } from "../../../../../../libs/ui/style";
import { useRecoilState } from "recoil";
import { createEventDataAtom } from "../../../state/createEventInfo.state";
import { useEffect, useRef } from "react";
import { writeInfoModeAtom } from "../WriteInfoMode.state";
import dayjs from "dayjs";

export function WriteTitleContainer() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [event, setEvent] = useRecoilState(createEventDataAtom);
    const [, setMode] = useRecoilState(writeInfoModeAtom);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const changeTitle = (e: string) => {
        setEvent({
            ...event,
            title: e,
        });
    };

    return (
        <Flex.Column gap="4px">
            <StyledInput
                placeholder="일정 명을 입력해주세요."
                value={event.title}
                onChange={(e) => changeTitle(e.target.value)}
                ref={inputRef}
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
                        <BellSimple size={22} weight="fill" color={cv.gray04} />
                    </IconButton>
                    <IconButton onClick={() => setMode("location")}>
                        <MapPin size={22} weight="fill" color={cv.gray04} />
                    </IconButton>
                </Flex.Row>
                <NextButton>
                    <ArrowRight size={20} weight="bold" />
                </NextButton>
            </Flex.Between>
        </Flex.Column>
    );
}
