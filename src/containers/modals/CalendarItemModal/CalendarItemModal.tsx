import { styled } from "styled-components";
import { Button, Flex, Modal, useModal } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { CreateEventModal } from "../CreateEventModal/CreateEventModal";
import { useNavigate } from "react-router-dom";

const StyledItem = styled.div`
    background-color: ${cv.bgHome};
    border-left: solid 6px ${cv.primary};
    border-radius: 12px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
`;

const ItemTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const ItemSubtitle = styled.div`
    font-size: 8px;
`;

const Badge = styled.div`
    background-color: ${cv.markerTagBlue};
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 9px;
`;

interface ItemProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    isOnline?: boolean;
}
function Item({ title, subtitle, isOnline = false }: ItemProps) {
    return (
        <StyledItem>
            <Flex.Column>
                <ItemTitle>{title}</ItemTitle>
                {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
            </Flex.Column>
            <Badge>{isOnline ? "Online" : "Offline"}</Badge>
        </StyledItem>
    );
}

export interface CalendarItemModalProps {
    nextAction?: "moveCalendar" | "createEvent";
}
export function CalendarItemModal({
    nextAction = "moveCalendar",
}: CalendarItemModalProps) {
    const modal = useModal();
    const navigate = useNavigate();

    const moveCalendar = () => {
        navigate("/main/calendar");
        modal.closeAll();
    };

    return (
        <Modal>
            <Modal.Header>7월 25일 화요일</Modal.Header>
            <Modal.Body>
                <Flex.Column gap="6px">
                    <Item
                        title="프로젝트 회의"
                        subtitle="오후 2시 - 오후 4시"
                    />
                    <Item
                        title="프로젝트 회의"
                        subtitle="오후 2시 - 오후 4시"
                    />
                    <Item
                        title="프로젝트 회의"
                        subtitle="오후 2시 - 오후 4시"
                    />
                    <Item
                        title="프로젝트 회의"
                        subtitle="오후 2시 - 오후 4시"
                    />
                </Flex.Column>
                <br />
                {nextAction === "createEvent" && (
                    <Button
                        variant="secondary"
                        onClick={() =>
                            modal.open(<CreateEventModal />, {
                                direction: "bottom",
                            })
                        }
                    >
                        + 일정 추가
                    </Button>
                )}

                {nextAction === "moveCalendar" && (
                    <Button variant="primary" onClick={() => moveCalendar()}>
                        캘린더 이동
                    </Button>
                )}
            </Modal.Body>
        </Modal>
    );
}
