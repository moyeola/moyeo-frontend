import { useGroup } from "../../../../../hooks/useGroup";
import { GroupHeader } from "./containers/GroupHeader";
import {
    Flex,
    IconButton,
    Layout,
    Modal,
    Section,
    useModal,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { AppNavBar } from "../../../../../containers/AppNavBar/AppNavBar";
import { styled } from "styled-components";

import CalendarIcon from "./assets/calendar.png";
import FlagIcon from "./assets/flag.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LinkSimple } from "@phosphor-icons/react";
import { GroupCalendar } from "../../../../../containers/GroupCalendar/GroupCalendar";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";

function GroupCalendarSection() {
    const { group } = useGroup();
    return (
        <Section>
            <Section.Header
                title="그룹 캘린더"
                moveButton={{
                    text: "캘린더 이동하기",
                }}
            />
            <GroupCalendar groupId={group?.id || -1} />
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
    const { group } = useGroup();
    const { data: inviteCode } = useQuery(
        ["group", group?.id, "inviteCode"],
        async () => {
            const res = await client.groups.getInviteCode({
                groupId: `${group?.id}`,
            });
            return res.inviteCode;
        },
        {
            enabled: !!group?.id,
        }
    );

    const shareGroup = async () => {
        if (window.navigator.share === undefined) {
            modal.open(
                <InviteGroupModal
                    url={`https://moyeo.la/invite/${inviteCode}`}
                />
            );

            return;
        }

        await window.navigator.share({
            title: document.title,
            text: "Moyeo.la 팀 초대 링크",
            url: `https://moyeo.la/invite/${inviteCode}`,
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
                <GroupToolItem
                    name="일정 조율"
                    icon={CalendarIcon}
                    to="./meets"
                />
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
