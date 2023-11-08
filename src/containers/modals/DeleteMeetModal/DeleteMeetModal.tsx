import { GroupDto, MeetDto } from "moyeo-object";
import { Button, Modal, useModal } from "../../../libs/ui";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { client } from "../../../libs/api";
import { toast } from "react-toastify";

export interface DeleteMeetModalProps {
    meet: MeetDto;
    group?: GroupDto;
}
export function DeleteMeetModal({ meet, group }: DeleteMeetModalProps) {
    const modal = useModal();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate } = useMutation(
        () =>
            client.meets.delete({
                meetId: `${meet.id}` || "-1",
            }),
        {
            onSuccess: () => {
                modal.close();
                queryClient.invalidateQueries(["meet"]);
                toast.info("일정 조율이 삭제되었어요.");
                navigate(`/main/groups/${group?.id}/meets`);
            },
            onError: (err) => {
                toast.error("일정 조율 삭제에 실패했어요.");
                console.error(err);
            },
        }
    );

    return (
        <Modal>
            <Modal.Header>일정조율 삭제</Modal.Header>
            <Modal.Body>
                정말로 일정조율을 삭제하시겠어요?
                <br />
                삭제한 일정조율은 복구할 수 없어요.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => modal.close()} variant="secondary">
                    취소
                </Button>
                <Button onClick={() => mutate()}>삭제</Button>
            </Modal.Footer>
        </Modal>
    );
}
