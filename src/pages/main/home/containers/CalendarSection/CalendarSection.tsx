import { useNavigate } from "react-router-dom";
import { CalendarInline, Section, useModal } from "../../../../../libs/ui";
import { CalendarItemModal } from "../../../../../containers/modals/CalendarItemModal/CalendarItemModal";

export function CalendarSection() {
    const navigate = useNavigate();
    const modal = useModal();

    return (
        <Section>
            <Section.Header
                title="캘린더"
                moveButton={{
                    text: "캘린더 이동하기",
                    onClick: () => navigate("/calendar"),
                }}
            />
            <CalendarInline>
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        {
                            title: "테스트 이벤트",
                        },
                        {
                            title: "테스트 이벤트",
                        },
                    ]}
                    onClick={() =>
                        modal.open(
                            <CalendarItemModal nextAction="moveCalendar" />
                        )
                    }
                />
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        {
                            title: "테스트 이벤트",
                        },
                        {
                            title: "테스트 이벤트",
                        },
                    ]}
                    onClick={() =>
                        modal.open(
                            <CalendarItemModal nextAction="createEvent" />
                        )
                    }
                />
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        {
                            title: "테스트 이벤트",
                        },
                        {
                            title: "테스트 이벤트",
                        },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        {
                            title: "테스트 이벤트",
                        },
                        {
                            title: "테스트 이벤트",
                        },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        {
                            title: "테스트 이벤트",
                        },
                        {
                            title: "테스트 이벤트",
                        },
                    ]}
                />
            </CalendarInline>
        </Section>
    );
}
