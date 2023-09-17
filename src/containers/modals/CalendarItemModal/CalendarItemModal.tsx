import { styled } from "styled-components";
import { Button, Flex, Modal, useModal } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { CreateEventModal } from "../CreateEventModal/CreateEventModal";
import { useNavigate } from "react-router-dom";
import { CalendarDto, CalendarEventDto } from "moyeo-object";
import dayjs from "dayjs";
import { UpdateEventModal } from "../UpdateEventModal/UpdateEventModal";

const StyledItem = styled.div`
    background-color: ${cv.bgHome};
    border-left: solid 6px ${cv.primary};
    border-radius: 12px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    cursor: pointer;
`;

const ItemTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const ItemSubtitle = styled.div`
    font-size: 12px;
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
    onClick?: () => void;
}
function Item({ title, subtitle, isOnline = false, onClick }: ItemProps) {
    return (
        <StyledItem onClick={() => onClick && onClick()}>
            <Flex.Column gap="4px">
                <ItemTitle>{title}</ItemTitle>
                {subtitle && <ItemSubtitle>{subtitle}</ItemSubtitle>}
            </Flex.Column>
            <Badge>{isOnline ? "Online" : "Offline"}</Badge>
        </StyledItem>
    );
}

export interface CalendarItemModalProps {
    nextAction?: "moveCalendar" | "createEvent";
    events: (CalendarEventDto & {
        calendar?: CalendarDto;
    })[];
    date: string;
    fromCalendarId?: number;
}
export function CalendarItemModal({
    nextAction = "moveCalendar",
    date,
    events,
    fromCalendarId,
}: CalendarItemModalProps) {
    const modal = useModal();
    const navigate = useNavigate();

    const moveCalendar = () => {
        navigate("/main/calendar");
        modal.closeAll();
    };

    return (
        <Modal>
            <Modal.Header>{dayjs(date).format("MM월 DD일 일정")}</Modal.Header>
            <Modal.Body>
                <Flex.Column gap="6px">
                    {events.map((event) => (
                        <Item
                            key={event.id}
                            title={event.title}
                            subtitle={`${event.calendar?.name}ㆍ${
                                event.start.dateTime
                                    ? `${dayjs(event.start?.dateTime).format(
                                          "A hh:mm"
                                      )} - ${dayjs(
                                          event?.end?.dateTime ||
                                              event.start?.dateTime
                                      ).format("A hh:mm")}`
                                    : `종일`
                            } ${event.location ? `ㆍ${event.location}` : ""}`}
                            isOnline={event.isOnline}
                            onClick={() =>
                                modal.open(<UpdateEventModal event={event} />, {
                                    direction: "bottom",
                                })
                            }
                        />
                    ))}
                </Flex.Column>
                <br />
                {nextAction === "createEvent" && (
                    <Button
                        variant="secondary"
                        onClick={() =>
                            modal.open(
                                <CreateEventModal
                                    calendarId={fromCalendarId}
                                    defaultValue={{
                                        date,
                                    }}
                                />,
                                {
                                    direction: "bottom",
                                }
                            )
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
