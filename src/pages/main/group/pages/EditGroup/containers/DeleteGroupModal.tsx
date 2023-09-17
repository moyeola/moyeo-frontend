import { useMutation, useQueryClient } from "react-query";
import { Button, Modal, useModal } from "../../../../../../libs/ui";
import { client } from "../../../../../../libs/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface DeleteGroupModalProps {
    groupId: number;
}
export function DeleteGroupModal({ groupId }: DeleteGroupModalProps) {
    const modal = useModal();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: deleteGroup } = useMutation(
        () =>
            client.groups.delete({
                groupId: `${groupId}` || "-1",
            }),
        {
            onSuccess: () => {
                modal.close();
                queryClient.invalidateQueries(["user"]);
                toast.info("그룹이 삭제되었어요.");
                navigate("/main/groups");
            },
            onError: (err) => {
                toast.error("그룹 삭제에 실패했어요.");
                console.error(err);
            },
        }
    );

    return (
        <Modal>
            <Modal.Header>그룹 삭제</Modal.Header>
            <Modal.Body>
                정말로 그룹을 삭제하시겠어요?
                <br />
                삭제한 그룹은 복구할 수 없어요.
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => modal.close()} variant="secondary">
                    취소
                </Button>
                <Button onClick={() => deleteGroup()}>삭제</Button>
            </Modal.Footer>
        </Modal>
    );
}
