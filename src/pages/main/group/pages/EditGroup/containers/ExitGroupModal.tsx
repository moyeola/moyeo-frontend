import { useMutation, useQueryClient } from "react-query";
import { Button, Modal, useModal } from "../../../../../../libs/ui";
import { client } from "../../../../../../libs/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGroup } from "../../../../../../hooks/useGroup";

export interface ExitGroupModalProps {
    groupId: number;
}
export function ExitGroupModal({ groupId }: ExitGroupModalProps) {
    const modal = useModal();
    const { memberMe } = useGroup(groupId);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: exitGroup } = useMutation(
        () =>
            client.groups.members.delete({
                groupId: `${groupId}` || "-1",
                memberId: `${memberMe?.id}` || "-1",
            }),
        {
            onSuccess: () => {
                modal.close();
                queryClient.invalidateQueries(["user"]);
                toast.info("그룹에서 탈퇴했어요.");
                navigate("/main/groups");
            },
            onError: (err) => {
                toast.error("그룹 탈퇴에 실패했어요.");
                console.error(err);
            },
        }
    );

    return (
        <Modal>
            <Modal.Header>그룹 탈퇴</Modal.Header>
            <Modal.Body>정말로 그룹에서 탈퇴하시겠어요?</Modal.Body>
            <Modal.Footer>
                <Button onClick={() => modal.close()} variant="secondary">
                    취소
                </Button>
                <Button onClick={() => exitGroup()}>탈퇴</Button>
            </Modal.Footer>
        </Modal>
    );
}
