import { useMemo, useState } from "react";

export const amPmOptions = [
    { label: "AM", value: "AM" },
    { label: "PM", value: "PM" },
];

export const hourOptions = [
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

export const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    label: `${i}`.padStart(2, "0"),
    value: `${i}`.padStart(2, "0"),
}));

export const useTimePicker = (initTime: string = "00:00") => {
    const [hour, setHour] = useState(+(initTime.split(":")[0] || 1) % 12);
    const [amPm, setAmPm] = useState(
        `${+initTime?.split(":")[0] >= 12 ? "PM" : "AM"}`
    );
    const [minute, setMinute] = useState(+(initTime.split(":")[1] || 0));

    const time = `${hour + (amPm === "PM" ? 12 : 0)}:${minute}`.padStart(
        5,
        "0"
    );
    const text =
        hour === 0
            ? amPm === "AM"
                ? "자정"
                : "정오"
            : `${amPm === "AM" ? "오전" : "오후"} ${hour}시`;

    const result = useMemo(
        () => ({
            hour: `${hour}`.padStart(2, "0"),
            minute: `${minute}`.padStart(2, "0"),
            amPm,
            text,
        }),
        [amPm, hour, minute, text]
    );

    return [result, time, setHour, setAmPm, setMinute] as const;
};
