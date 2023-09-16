import { useGroup } from "../../../../../hooks/useGroup";
import { GroupHeader } from "./containers/GroupHeader";
import {
    Calendar,
    Flex,
    IconButton,
    Layout,
    Modal,
    Section,
    useModal,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { AppNavBar } from "../../../../../containers/AppNavBar/AppNavBar";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";
import dayjs from "dayjs";
import { CalendarItemModal } from "../../../../../containers/modals/CalendarItemModal/CalendarItemModal";
import { styled } from "styled-components";

import CalendarIcon from "./assets/calendar.png";
import FlagIcon from "./assets/flag.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LinkSimple } from "@phosphor-icons/react";

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

const StyledGroupToolItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: ${cv.bgOnboarding};
    text-decoration: none;
    color: ${cv.gray01};
    flex: 1;
    font-size: 11px;
    font-weight: 500;
    gap: 4px;
    height: 100%;
    border-radius: 18px;
`;

const StyledGroupToolItemImage = styled.img``;

function GroupToolItem({
    name,
    icon,
    to,
    onClick,
}: {
    name: string;
    icon: string;
    to?: string;
    onClick?: () => void;
}) {
    return (
        <StyledGroupToolItem to={to || ""} onClick={() => onClick && onClick()}>
            <StyledGroupToolItemImage src={icon} />
            {name}
        </StyledGroupToolItem>
    );
}

function DummyGroupToolItem() {
    return (
        <StyledGroupToolItem as={"div"} to="">
            추후 기능 개발 예정입니다.
        </StyledGroupToolItem>
    );
}

function InviteGroupModal({ url }: { url: string }) {
    const modal = useModal();

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        toast.info("팀 초대 링크가 클립보드에 복사되었습니다.");
        modal.close();
    };

    return (
        <Modal>
            <Modal.Header>아래 링크를 공유해 팀을 초대해주세요</Modal.Header>
            <Modal.Body>
                <Flex.Row gap="12px">
                    <Flex width="100%">{url}</Flex>
                    <IconButton onClick={() => copyLink()}>
                        <LinkSimple />
                    </IconButton>
                </Flex.Row>
            </Modal.Body>
        </Modal>
    );
}

function GroupToolSection() {
    const modal = useModal();

    const shareGroup = async () => {
        if (window.navigator.share === undefined) {
            modal.open(
                <InviteGroupModal url="https://moyeo.la/invite/xxxxxx" />
            );

            return;
        }

        await window.navigator.share({
            title: document.title,
            text: "Hello World",
            url: "https://developer.mozilla.org",
        });
    };

    return (
        <Section>
            <Section.Header title="팀 도구" />
            <Flex.Row gap="12px">
                <GroupToolItem
                    name="팀 초대"
                    icon={FlagIcon}
                    onClick={() => shareGroup()}
                />
                <GroupToolItem name="일정 조율" icon={CalendarIcon} to="" />
                <DummyGroupToolItem />
            </Flex.Row>
        </Section>
    );
}

export function GroupPage() {
    return (
        <>
            <GroupHeader />
            <Layout bgColor={cv.bgHome}>
                <Flex.Column gap="20px">
                    <GroupCalendarSection />
                    <GroupToolSection />
                </Flex.Column>
            </Layout>
            <AppNavBar selected="group" />
        </>
    );
}
