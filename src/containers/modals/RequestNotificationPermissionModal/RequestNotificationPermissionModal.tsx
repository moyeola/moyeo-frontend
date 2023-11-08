import { useNotification } from "../../../hooks/useNotification";
import { Button, Modal } from "../../../libs/ui";

export function RequestNotificationPermissionModal() {
    const notification = useNotification();

    return (
        <Modal>
            <Modal.Header>알림 권한을 허용해주세요.</Modal.Header>
            <Modal.Body>
                브라우저에서 알림을 받을 수 있도록 권한을 수락해주세요.
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={async () => await notification.requestPermission()}
                >
                    확인
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
