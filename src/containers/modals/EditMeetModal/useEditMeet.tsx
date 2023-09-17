import { useMutation, useQueryClient } from "react-query";
import { client } from "../../../libs/api";
import { useRecoilValue } from "recoil";
import { editMeetModalData } from "./EditMeetModalData.state";
import { Flex, Modal, useModal } from "../../../libs/ui";
import { toast } from "react-toastify";

function ConfirmEditMeetModal({ onClick }: { onClick: () => void }) {
    const modal = useModal();

    return (
        <Modal>
            <Modal.Header>일정조율 조건을 편집할까요?</Modal.Header>
            <Modal.Body>
                날짜나 시간을 편집할 경우 기존 팀원들의 응답이 사라지고 다시
                작성해야 해요.
            </Modal.Body>
            <Modal.Footer>
                <Flex.Between width="100%">
                    <Modal.Button onClick={() => modal.close()}>
                        취소
                    </Modal.Button>
                    <Modal.Button
                        onClick={() => {
                            modal.close();
                            onClick();
                        }}
                    >
                        편집하기
                    </Modal.Button>
                </Flex.Between>
            </Modal.Footer>
        </Modal>
    );
}

export function useCreateMeet() {
    const modal = useModal();
    const { dates, description, endTimeAt, id, groupId, name, startTimeAt } =
        useRecoilValue(editMeetModalData);
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation(
        () =>
            client.meets.patch({
                meetId: `${id}`,
                title: name,
                description: description,
                startTimeAt: startTimeAt,
                endTimeAt: endTimeAt,
                dates: dates,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["meet", `${id}`]);
                modal.closeAll();
            },
            onError: (error) => {
                console.error(error);
                toast.error("일정 조율을 수정하는데 실패했습니다.");
            },
        }
    );

    const editMeet = () => {
        modal.open(<ConfirmEditMeetModal onClick={() => mutate()} />);
    };

    return {
        editMeet,
        isLoading,
    };
}
