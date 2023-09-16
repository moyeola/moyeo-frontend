import { BellSimple, Calendar, MapPin } from "@phosphor-icons/react";
import { Flex } from "../../../../../../libs/ui";
import {
    IconButton,
    LocationInput,
    ModeButton,
    StyledInput,
} from "../WriteInfo.style";
import { cv } from "../../../../../../libs/ui/style";
import { useRecoilState } from "recoil";
import { createEventDataAtom } from "../../../state/createEventInfo.state";
import { useEffect, useRef } from "react";
import { writeInfoModeAtom } from "../WriteInfoMode.state";
import dayjs from "dayjs";
import { CreateEventButton } from "../CreateButton";

export function WriteLocationContainer() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [event, setEvent] = useRecoilState(createEventDataAtom);
    const [, setMode] = useRecoilState(writeInfoModeAtom);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const changeLocation = (e: string) => {
        setEvent({
            ...event,
            location: e,
        });
    };

    const changeIsOnline = (isOnline: boolean) => {
        setEvent({
            ...event,
            isOnline,
        });
    };

    return (
        <Flex.Column gap="4px">
            <StyledInput
                placeholder="일정 명을 입력해주세요."
                value={event.title}
                onClick={() => setMode("title")}
                readOnly
            />
            <Flex.Column gap="8px">
                <Flex.Row gap="7px">
                    <ModeButton
                        $selected={!event.isOnline}
                        onClick={() => changeIsOnline(false)}
                    >
                        Offline
                    </ModeButton>
                    <ModeButton
                        $selected={event.isOnline}
                        onClick={() => changeIsOnline(true)}
                    >
                        Online
                    </ModeButton>
                </Flex.Row>
                <LocationInput
                    placeholder="일정 장소를 입력해주세요."
                    value={event.location}
                    ref={inputRef}
                    onChange={(e) => changeLocation(e.target.value)}
                />
            </Flex.Column>
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
                        <MapPin size={22} weight="fill" color={cv.gray03} />
                    </IconButton>
                </Flex.Row>
                <CreateEventButton />
            </Flex.Between>
        </Flex.Column>
    );
}
