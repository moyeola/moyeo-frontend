import { Modal, useModal } from "../../../../libs/ui";

export function MeetPressFinishModal() {
    const modal = useModal();

    return (
        <Modal>
            <Modal.Header>고생이 많으시네요</Modal.Header>
            <Modal.Body>팀원들에게 '독촉 알림'을 전송했어요!</Modal.Body>
            <Modal.Footer>
                <Modal.Button onClick={() => modal.close()}>확인</Modal.Button>
            </Modal.Footer>
        </Modal>
    );
}
