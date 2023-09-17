import { useRecoilState } from "recoil";
import { updateEventModalStateAtom } from "./state/updateEventModal.state";
import { useEffect } from "react";
import { WriteInfoContainer } from "./containers/WriteInfo/WriteInfo";
import { updateEventDataAtom } from "./state/updateEventInfo.state";
import { CalendarEventDto } from "moyeo-object";

export interface UpdateEventModalProps {
    event: CalendarEventDto;
}

export function UpdateEventModal({ event }: UpdateEventModalProps) {
    const [step, setStep] = useRecoilState(updateEventModalStateAtom);
    const [, setEvent] = useRecoilState(updateEventDataAtom);

    useEffect(() => {
        setEvent({
            title: event.title,
            start: event.start,
            end: event.end,
            description: event.description,
            location: event.location,
            isOnline: event.isOnline,
            eventId: event.id,
            calendarId: event.calendarId,
        });
        setStep({
            step: "writeInfo",
        });
    }, [event, setEvent, setStep]);

    switch (step.step) {
        case "writeInfo":
            return <WriteInfoContainer />;
        default:
            break;
    }
}
