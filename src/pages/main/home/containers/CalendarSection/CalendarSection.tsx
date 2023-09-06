import { useNavigate } from "react-router-dom";
import { CalendarInline, Section } from "../../../../../libs/ui";

export function CalendarSection() {
    const navigate = useNavigate();

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
