import { useRecoilState } from "recoil";
import { createEventModalStateAtom } from "./state/createEventModal.state";
import { SelectCalendarContainer } from "./containers/SelectCalendar/SelectCalendar.container";
import { useEffect } from "react";
import { WriteInfoContainer } from "./containers/WriteInfo/WriteInfo";
import { createEventDataAtom } from "./state/createEventInfo.state";

export interface CreateEventModalProps {
    calendarId?: number;
    defaultValue?: {
        title?: string;
        date?: string;
    };
    callback?: () => void;
}

export function CreateEventModal({
    calendarId,
    defaultValue,
    callback,
}: CreateEventModalProps) {
    const [step, setStep] = useRecoilState(createEventModalStateAtom);
    const [, setEvent] = useRecoilState(createEventDataAtom);

    useEffect(() => {
        if (calendarId) {
            setEvent((prev) => ({
                ...prev,
                calendarId,
            }));
            setStep({
                step: "writeInfo",
            });
        } else {
            setStep({
                step: "selectGroup",
            });
        }
    }, [calendarId, setEvent, setStep]);

    useEffect(() => {
        if (defaultValue) {
            setEvent((prev) => ({
                ...prev,
                start: {
                    date: defaultValue.date,
                },
                title: defaultValue.title,
            }));
        }

        if (callback) {
            setEvent((prev) => ({
                ...prev,
                callback,
            }));
        }
    }, [setEvent, defaultValue, callback]);

    switch (step.step) {
        case "selectGroup":
            return <SelectCalendarContainer />;
        case "writeInfo":
            return <WriteInfoContainer />;
        default:
            break;
    }
}
