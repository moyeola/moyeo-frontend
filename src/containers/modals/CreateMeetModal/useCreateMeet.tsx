import { useMutation, useQueryClient } from "react-query";
import { client } from "../../../libs/api";
import { useRecoilValue } from "recoil";
import { createMeetModalData } from "./CreateMeetModalData.state";
import { useUser } from "../../../hooks/useUser";
import { useModal } from "../../../libs/ui";
import { toast } from "react-toastify";

export function useCreateMeet() {
    const modal = useModal();
    const meet = useRecoilValue(createMeetModalData);
    const { groupId } = useRecoilValue(createMeetModalData);
    const queryClient = useQueryClient();
    const { user } = useUser();
    const memberId = user?.members.find(
        (member) => member?.group?.id === groupId
    )?.id;

    const { mutate, isLoading } = useMutation(
        () =>
            client.meets.post({
                title: meet.name || "",
                description: meet.description,
                creator: {
                    type: "member",
                    memberId: memberId || -1,
                },
                startTimeAt: meet.startTimeAt || "",
                endTimeAt: meet.endTimeAt || "",
                dates: meet.dates || [],
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["group", groupId, "meets"]);
                modal.close();
            },
            onError: (error) => {
                console.error(error);
                toast.error("일정 조율을 생성하는데 실패했습니다.");
            },
        }
    );

    return {
        createMeet: mutate,
        isLoading,
    };
}
