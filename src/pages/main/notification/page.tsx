import { CaretLeft } from "@phosphor-icons/react";
import { Header, IconButton, Layout } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { useQuery } from "react-query";
import { client } from "../../../libs/api";
import styled from "styled-components";
import { NotificationItem } from "./components/NotificationItem";
import { useNavigate } from "react-router-dom";
import { TeamRequestItem } from "./components/TeamRequestItem";

function NotificationHeader() {
    const navigate = useNavigate();

    return (
        <Header bgColor={cv.bgOnboarding}>
            <Header.Left>
                <IconButton onClick={() => navigate("/main")}>
                    <CaretLeft weight="regular" color={cv.gray01} />
                </IconButton>
            </Header.Left>
            <Header.Title>알림</Header.Title>
            <Header.Right />
        </Header>
    );
}

const StyledNotifications = styled.div`
    display: flex;
    flex-direction: column;
`;

const Mock = () => {
    return (
        <NotificationItem
            notification={{
                id: 1,
                type: "GROUP_SCHEDULE",
                action: {
                    type: "to",
                    url: "/main/groups/1/schedules/1",
                },
                author: {
                    type: "GROUP",
                    id: 1,
                    name: "프론트엔드 스터디",
                },
                body: "프론트엔드 스터디 일정이 추가되었습니다.",
                createdAt: new Date().toISOString(),
                title: "프론트엔드 스터디 일정.",
            }}
        />
    );
};

export function NotificationPage() {
    const { data } = useQuery(["notifications"], () =>
        client.users.me.notifications.get({})
    );

    return (
        <>
            <NotificationHeader />
            <Layout paddingTop="60px" paddingBottom="120px" minHeight="100dvh">
                <StyledNotifications>
                    <TeamRequestItem />
                    {data?.notifications.map((notification) => (
                        <NotificationItem notification={notification} />
                    ))}
                    <Mock />
                    <Mock />
                    <Mock />
                    <Mock />
                    <Mock />
                </StyledNotifications>
            </Layout>
        </>
    );
}
