import { useGroup } from "../../../../../hooks/useGroup";
import { GroupHeader } from "./containers/GroupHeader";
import {
    Calendar,
    Flex,
    Layout,
    Section,
    useModal,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { AppNavBar } from "../../../../../containers/AppNavBar/AppNavBar";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";
import dayjs from "dayjs";
import { CalendarItemModal } from "../../../../../containers/modals/CalendarItemModal/CalendarItemModal";

function GroupCalendarSection() {
    const modal = useModal();
    const { group } = useGroup();

    const { data: calendars } = useQuery(
        ["group", group?.id, "calendar"],
        async () => {
            const res = await client.calendars.search({
                ownerType: "group",
                ownerId: group?.id,
            });
            return res.calendars;
        },
        {
            enabled: !!group?.id,
        }
    );
    const { data: events } = useQuery(
        ["group", group?.id, "calendar", "event"],
        async () => {
            const res = await client.calendars.event.list({
                calendarId: calendars?.[0].id || -1,
                start: dayjs().startOf("week").toISOString(),
                end: dayjs().startOf("week").add(21, "days").toISOString(),
            });
            return res.events;
        },
        {
            enabled: !!calendars?.[0].id,
        }
    );

    const calendarStartDay = dayjs().startOf("week");

    return (
        <Section>
            <Section.Header
                title="그룹 캘린더"
                moveButton={{
                    text: "캘린더 이동하기",
                }}
            />
            <Calendar>
                {Array(3)
                    .fill(undefined)
                    .map((_, i) => (
                        <Calendar.Week key={`week${i}`}>
                            {Array(7)
                                .fill(undefined)
                                .map((_, j) => (
                                    <Calendar.Item
                                        key={`week${i}day${j}`}
                                        date={calendarStartDay
                                            .add((i + 1) * (j + 1), "day")
                                            .toISOString()}
                                        events={[]}
                                        onClick={() =>
                                            modal.open(
                                                <CalendarItemModal nextAction="createEvent" />
                                            )
                                        }
                                    />
                                ))}
                        </Calendar.Week>
                    ))}
            </Calendar>
        </Section>
    );
}

export function GroupPage() {
    const { group } = useGroup();

    return (
        <>
            <GroupHeader />
            <Layout bgColor={cv.bgHome}>
                <Flex.Column gap="20px">
                    <GroupCalendarSection />
                    <Section>
                        <Section.Header title="팀 도구" />
                    </Section>
                </Flex.Column>
            </Layout>
            <AppNavBar selected="group" />
        </>
    );
}
