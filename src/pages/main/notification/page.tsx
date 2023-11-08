import { CaretLeft } from "@phosphor-icons/react";
import { Header, IconButton, Layout, NotificationItem } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { useQuery } from "react-query";
import { client } from "../../../libs/api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

export function NotificationPage() {
    const navigate = useNavigate();

    const { data } = useQuery(["notifications"], () =>
        client.users.me.notifications.get({})
    );

    return (
        <>
            <NotificationHeader />
            <Layout paddingTop="60px" paddingBottom="120px" minHeight="100dvh">
                <StyledNotifications>
                    {/* <TeamRequestItem /> */}
                    {data?.notifications.map((notification) => (
                        <NotificationItem
                            notification={notification}
                            onClick={() => navigate(notification.action.url)}
                        />
                    ))}
                </StyledNotifications>
            </Layout>
        </>
    );
}
