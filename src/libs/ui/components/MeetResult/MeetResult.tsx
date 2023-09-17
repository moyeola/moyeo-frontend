import { useState } from "react";
import {
    StyledDateContainer,
    StyledDateLabel,
    StyledDateLabelDay,
    StyledDateLabelDayOfTheWeek,
    StyledMeetCell,
    StyledMeetPicker,
    StyledMeetPickerPagination,
    StyledMeetPickerPaginationButton,
    StyledMeetRow,
    StyledMeetRows,
    StyledTimeLabel,
} from "./MeetResult.style";
import { MeetResultProps } from "./MeetResult.type";
import dayjs from "dayjs";
import { dayOfTheWeekMap } from "../../utils/dayOfTheWeekMap";

const numToDateTime = (num: number, date: string) => {
    const _num = `${num}`.padStart(4, "0");
    return `${date}T${_num.slice(0, 2)}:${
        _num.slice(2, 4) === "50" ? `30` : `00`
    }:00`;
};

interface MeetResultCellProps {
    setTime: MeetResultProps["setTime"];
    time: MeetResultProps["time"];
    date: string;
    start: number;
    end: number;
    ratio: number;
    isFirstRow: boolean;
    isLastRow: boolean;
}
function MeetResultCell({
    date,
    end,
    start,
    setTime,
    time,
    isFirstRow,
    isLastRow,
    ratio,
}: MeetResultCellProps) {
    const isSelected = !!(
        time &&
        numToDateTime(start, date) === time.start &&
        numToDateTime(end, date) === time.end
    );

    const onClick = () => {
        setTime({
            start: numToDateTime(start, date),
            end: numToDateTime(end, date),
        });
    };

    return (
        <StyledMeetCell
            $ratio={ratio}
            $isFirstRow={isFirstRow}
            $isLastRow={isLastRow}
            $isHalf={start % 100 === 50}
            onClick={onClick}
            $isSelected={isSelected}
        />
    );
}

export function MeetResult({
    dates,
    setTime,
    time,
    startTimeAt,
    endTimeAt,
    responses,
}: MeetResultProps) {
    const [page, setPage] = useState(0);
    const pages = Math.ceil(dates.length / 7);
    const currentDates = dates.slice(page * 7, (page + 1) * 7);

    const startTimeNum = +`${startTimeAt.slice(0, 2)}${
        startTimeAt.slice(3, 5) === "30" ? "50" : "00"
    }`;
    const endTimeNum = +`${endTimeAt.slice(0, 2)}${
        startTimeAt.slice(3, 5) === "30" ? "50" : "00"
    }`;

    const rowNum = Math.ceil((endTimeNum - startTimeNum) / 50);

    return (
        <StyledMeetPicker>
            <StyledDateContainer>
                {currentDates.map((date, index) => {
                    const dayOfTheWeek = dayOfTheWeekMap(
                        dayjs(date).format("ddd")
                    );

                    return (
                        <StyledDateLabel key={index}>
                            <StyledDateLabelDayOfTheWeek>
                                {dayOfTheWeek}
                            </StyledDateLabelDayOfTheWeek>
                            <StyledDateLabelDay>
                                {dayjs(date).format("M.D")}
                            </StyledDateLabelDay>
                        </StyledDateLabel>
                    );
                })}
            </StyledDateContainer>
            <StyledMeetRows>
                {Array.from({ length: rowNum }).map((_, rowIndex) => {
                    const start = startTimeNum + rowIndex * 50;
                    const end = startTimeNum + (rowIndex + 1) * 50;
                    const _time = +`${start}`.padStart(4, "0").slice(0, 2);
                    const timeMinute = +`${start}`.padStart(4, "0").slice(2, 4);
                    const timeLabel =
                        _time > 12 ? `${_time - 12} PM` : `${_time} AM`;

                    return (
                        <StyledMeetRow key={rowIndex}>
                            <StyledTimeLabel>
                                {timeMinute === 0 ? timeLabel : ""}
                            </StyledTimeLabel>
                            {currentDates.map((date, index) => {
                                const responsesTimes = responses
                                    .map((response) => response.times)
                                    .filter((times) =>
                                        times.some(
                                            (time) =>
                                                time.start ===
                                                    numToDateTime(
                                                        start,
                                                        date
                                                    ) &&
                                                time.end ===
                                                    numToDateTime(end, date)
                                        )
                                    );

                                return (
                                    <MeetResultCell
                                        key={index}
                                        date={date}
                                        end={end}
                                        start={start}
                                        time={time}
                                        setTime={setTime}
                                        isFirstRow={rowIndex === 0}
                                        isLastRow={rowIndex === rowNum - 1}
                                        ratio={
                                            responsesTimes.length /
                                            responses.length
                                        }
                                    />
                                );
                            })}
                        </StyledMeetRow>
                    );
                })}
            </StyledMeetRows>
            {pages > 1 && (
                <StyledMeetPickerPagination>
                    {Array.from({ length: pages }).map((_, index) => {
                        return (
                            <StyledMeetPickerPaginationButton
                                key={index}
                                $selected={page === index}
                                onClick={() => setPage(index)}
                            >
                                {index + 1}
                            </StyledMeetPickerPaginationButton>
                        );
                    })}
                </StyledMeetPickerPagination>
            )}
        </StyledMeetPicker>
    );
}
