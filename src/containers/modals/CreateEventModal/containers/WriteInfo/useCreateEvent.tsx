import { useRecoilState, useResetRecoilState } from "recoil";
import { createEventDataAtom } from "../../state/createEventInfo.state";
import { useModal } from "../../../../../libs/ui";
import { useMutation, useQueryClient } from "react-query";
import { client } from "../../../../../libs/api";
import { toast } from "react-toastify";

export function useCreateEvent() {
    const modal = useModal();
    const [event] = useRecoilState(createEventDataAtom);
    const resetEventAtom = useResetRecoilState(createEventDataAtom);
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(
        () =>
            client.calendars.event.post({
                calendarId: event.calendarId || -1,
                start: event.start,
                end: event.end || event.start,
                title: event.title || "",
                description: event.description,
                location: event.location,
                isOnline: event.isOnline,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries([
                    "calendars",
                    event.calendarId,
                    "events",
                ]);
                resetEventAtom();
                modal.closeAll();
                event.callback?.();
            },
            onError: (err) => {
                toast.error("일정 생성에 실패했어요");
                console.error(err);
            },
        }
    );

    return {
        createEvent: mutate,
        isLoading,
    };
}
