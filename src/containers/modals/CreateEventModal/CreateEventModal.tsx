import { useRecoilState } from "recoil";
import { createEventModalStateAtom } from "./state/createEventModal.state";
import { SelectCalendarContainer } from "./containers/SelectCalendar/SelectCalendar.container";
import { useEffect } from "react";
import { WriteInfoContainer } from "./containers/WriteInfo/WriteInfo";
import { createEventDataAtom } from "./state/createEventInfo.state";

export interface CreateEventModalProps {
    calendarId?: number;
    date?: string;
}

export function CreateEventModal({ calendarId, date }: CreateEventModalProps) {
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
        if (date) {
            setEvent((prev) => ({
                ...prev,
                start: {
                    date,
                },
            }));
        }
    }, [date, setEvent]);

    switch (step.step) {
        case "selectGroup":
            return <SelectCalendarContainer />;
        case "writeInfo":
            return <WriteInfoContainer />;
        default:
            break;
    }
}
