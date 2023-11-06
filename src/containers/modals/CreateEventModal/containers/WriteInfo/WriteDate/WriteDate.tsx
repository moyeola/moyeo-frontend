import { useRef } from "react";
import { useRecoilState } from "recoil";
import { createEventDataAtom } from "../../../state/createEventInfo.state";
import { createEventWriteInfoModeAtom } from "../WriteInfoMode.state";
import { Flex } from "../../../../../../libs/ui";
import {
    DateInput,
    DateInputLabel,
    ModeButton,
    IconButton,
    StyledInput,
} from "../WriteInfo.style";
import { BellSimple, Calendar, MapPin } from "@phosphor-icons/react";
import { cv } from "../../../../../../libs/ui/style";
import { CreateEventButton } from "../CreateButton";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DateFormatter, DayPicker } from "react-day-picker";
import dayjs from "dayjs";

type DateMode = "normal" | "period";

export function WriteDateContainer() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [event, setEvent] = useRecoilState(createEventDataAtom);
    const [, setMode] = useRecoilState(createEventWriteInfoModeAtom);

    const formatCaption: DateFormatter = (month, options) => {
        return <>{format(month, "yyyy년 MM월", { locale: options?.locale })}</>;
    };

    const dateMode: DateMode = event.end ? "period" : "normal";
    const setDateMode = (mode: DateMode) => {
        if (mode === dateMode) {
            return;
        }

        if (mode === "normal") {
            setEvent((prev) => ({
                ...prev,
                end: undefined,
            }));
        } else if (mode === "period") {
            setEvent((prev) => ({
                ...prev,
                end: {
                    dateTime: "",
                },
            }));
        }
    };

    const changeStartDate = (e: string) => {
        setEvent({
            ...event,
            start: {
                dateTime: e,
            },
        });
    };

    const changeEndDate = (e: string) => {
        setEvent({
            ...event,
            end: {
                dateTime: e,
            },
        });
    };

    return (
        <Flex.Column gap="8px">
            <StyledInput
                placeholder="일정 명을 입력해주세요."
                value={event.title}
                readOnly
                onClick={() => setMode("title")}
            />
            <Flex.Between>
                <Flex.Row gap="8px">
                    <IconButton onClick={() => setMode("date")}>
                        <Calendar size={22} weight="fill" color={cv.gray03} />
                    </IconButton>

                    <Flex.Row gap="4px">
                        <ModeButton
                            $selected={dateMode === "normal"}
                            onClick={() => setDateMode("normal")}
                        >
                            일반
                        </ModeButton>
                        {/* <ModeButton
                            $selected={dateMode === "period"}
                            onClick={() => setDateMode("period")}
                        >
                            기간
                        </ModeButton> */}
                    </Flex.Row>
                </Flex.Row>

                <Flex.Row gap="8px">
                    <IconButton onClick={() => setMode("notice")}>
                        <BellSimple size={22} weight="fill" color={cv.gray04} />
                    </IconButton>
                    <IconButton onClick={() => setMode("location")}>
                        <MapPin size={22} weight="fill" color={cv.gray04} />
                    </IconButton>
                    <CreateEventButton />
                </Flex.Row>
            </Flex.Between>
            <Flex.Column gap="4px">
                {dateMode === "normal" && (
                    <>
                        <Flex.Center>
                            <DayPicker
                                mode="single"
                                locale={ko}
                                selected={dayjs(
                                    event.start?.date || event.start?.dateTime
                                ).toDate()}
                                onSelect={(day) =>
                                    changeStartDate(
                                        dayjs(day).format("YYYY-MM-DD")
                                    )
                                }
                                modifiersStyles={{
                                    selected: {
                                        backgroundColor: cv.secondary,
                                        color: cv.primary,
                                    },
                                }}
                                formatters={{
                                    formatCaption,
                                }}
                                ISOWeek
                            />
                        </Flex.Center>
                    </>
                )}
                {dateMode === "period" && (
                    <>
                        <Flex.Row gap="8px">
                            <DateInputLabel>시작</DateInputLabel>
                            <DateInput
                                ref={inputRef}
                                type="datetime-local"
                                max={event.end?.dateTime}
                                value={event.start?.dateTime}
                                onChange={(e) =>
                                    changeStartDate(e.target.value)
                                }
                            />
                        </Flex.Row>
                        <Flex.Row gap="8px">
                            <DateInputLabel>종료</DateInputLabel>
                            <DateInput
                                type="datetime-local"
                                value={event.end?.dateTime}
                                min={event.start?.dateTime}
                                onChange={(e) => changeEndDate(e.target.value)}
                            />
                        </Flex.Row>
                    </>
                )}
            </Flex.Column>
        </Flex.Column>
    );
}
