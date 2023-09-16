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
} from "./MeetPicker.style";
import { MeetPickerProps } from "./MeetPicker.type";
import dayjs from "dayjs";

const dayOfTheWeekMap = (dotw: string) => {
    switch (dotw) {
        case "Mon":
            return "월";
        case "Tue":
            return "화";
        case "Wed":
            return "수";
        case "Thu":
            return "목";
        case "Fri":
            return "금";
        case "Sat":
            return "토";
        case "Sun":
            return "일";
        default:
            return "";
    }
};

const numToDateTime = (num: number, date: string) => {
    const _num = `${num}`.padStart(4, "0");
    return `${date}T${_num.slice(0, 2)}:${_num.slice(2, 4)}:00`;
};

interface MeetPickerCellProps {
    setTimes: MeetPickerProps["setTimes"];
    times: MeetPickerProps["times"];
    date: string;
    start: number;
    end: number;
    isLastRow: boolean;
}
function MeetPickerCell({
    date,
    end,
    start,
    times,
    setTimes,
    isLastRow,
}: MeetPickerCellProps) {
    const isMeet = times.some((time) => {
        return (
            numToDateTime(start, date) === time.start &&
            numToDateTime(end, date) === time.end
        );
    });

    const onClick = () => {
        console.log(
            times.filter(
                (time) =>
                    !(
                        numToDateTime(start, date) === time.start &&
                        numToDateTime(end, date) === time.end
                    )
            )
        );

        if (isMeet) {
            setTimes(
                times.filter(
                    (time) =>
                        !(
                            numToDateTime(start, date) === time.start &&
                            numToDateTime(end, date) === time.end
                        )
                )
            );
        } else {
            setTimes([
                ...times,
                {
                    start: numToDateTime(start, date),
                    end: numToDateTime(end, date),
                },
            ]);
        }
    };

    return (
        <StyledMeetCell
            $selected={isMeet}
            onClick={() => onClick()}
            $isLastRow={isLastRow}
            $isHalf={start % 100 === 50}
        />
    );
}

export function MeetPicker({
    dates,
    times,
    setTimes,
    startTimeAt,
    endTimeAt,
}: MeetPickerProps) {
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
                        <StyledMeetRow>
                            <StyledTimeLabel>
                                {timeMinute === 0 ? timeLabel : ""}
                            </StyledTimeLabel>
                            {currentDates.map((date, index) => (
                                <MeetPickerCell
                                    key={index}
                                    date={date}
                                    end={end}
                                    start={start}
                                    times={times}
                                    setTimes={setTimes}
                                    isLastRow={rowIndex === rowNum - 1}
                                />
                            ))}
                        </StyledMeetRow>
                    );
                })}
            </StyledMeetRows>
            {pages > 1 && (
                <StyledMeetPickerPagination>
                    {Array.from({ length: pages }).map((_, index) => {
                        return (
                            <StyledMeetPickerPaginationButton
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
