import { useRecoilState, useResetRecoilState } from "recoil";
import { updateEventDataAtom } from "../../state/updateEventInfo.state";
import { useModal } from "../../../../../libs/ui";
import { useMutation, useQueryClient } from "react-query";
import { client } from "../../../../../libs/api";
import { toast } from "react-toastify";

export function useUpdateEvent() {
    const modal = useModal();
    const [event] = useRecoilState(updateEventDataAtom);
    const resetEventAtom = useResetRecoilState(updateEventDataAtom);
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(
        () =>
            client.calendars.event.patch({
                eventId: event.eventId || -1,
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
            },
            onError: (err) => {
                toast.error("일정 업데이트에 실패했어요");
                console.error(err);
            },
        }
    );

    return {
        updateEvent: mutate,
        isLoading,
    };
}
