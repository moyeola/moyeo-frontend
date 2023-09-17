import { useMutation, useQueryClient } from "react-query";
import { Button, Modal, useModal } from "../../../../../../libs/ui";
import { client } from "../../../../../../libs/api";
import { toast } from "react-toastify";

export interface DeleteMemberModalProps {
    memberId: number;
    groupId: number;
}
export function DeleteMemberModal({
    groupId,
    memberId,
}: DeleteMemberModalProps) {
    const modal = useModal();
    const queryClient = useQueryClient();

    const { mutate: deleteMember } = useMutation(
        () =>
            client.groups.members.delete({
                groupId: `${groupId}` || "-1",
                memberId: `${memberId}`,
            }),
        {
            onSuccess: () => {
                modal.close();
                queryClient.invalidateQueries(["group", groupId]);
                toast.info("멤버가 삭제되었어요!");
            },
            onError: (err) => {
                toast.error("멤버 삭제에 실패했어요.");
                console.error(err);
            },
        }
    );

    return (
        <Modal>
            <Modal.Header>멤버 삭제</Modal.Header>
            <Modal.Body>정말로 멤버를 삭제하시겠습니까?</Modal.Body>
            <Modal.Footer>
                <Button onClick={() => modal.close()} variant="secondary">
                    취소
                </Button>
                <Button onClick={() => deleteMember()}>삭제</Button>
            </Modal.Footer>
        </Modal>
    );
}
