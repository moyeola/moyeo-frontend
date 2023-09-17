import { useNavigate } from "react-router-dom";
import { Section } from "../../../../../libs/ui";
import { AllWeekCalendar } from "../../../../../containers/AllWeekCalendar/AllWeekCalendar";

export function CalendarSection() {
    const navigate = useNavigate();

    return (
        <Section>
            <Section.Header
                title="캘린더"
                moveButton={{
                    text: "캘린더 이동하기",
                    onClick: () => navigate("/main/calendar"),
                }}
            />
            <AllWeekCalendar />
        </Section>
    );
}
