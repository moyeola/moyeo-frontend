import { NotificationDto, NotificationType } from "moyeo-object";
import styled from "styled-components";
import { Flex, Image } from "../../../../libs/ui";

import GroupScheduleIcon from "../assets/GroupSchedule.png";
import MeetRequestIcon from "../assets/MeetRequestIcon.png";
import MoyeoLogoIcons from "../../../../assets/logo/moyeoColorLogo.png";

const StyledNotificationContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 22px;
`;

const StyledLogo = styled.div``;

const StyledAuthor = styled.div``;

const StyledCreatedAt = styled.div``;

const StyledTitle = styled.div``;

const StyledBody = styled.div``;

const NotificationIconMap: Record<NotificationType, React.ReactNode> = {
    GROUP_SCHEDULE: (
        <Image src={GroupScheduleIcon} width="32px" height="32px" />
    ),
    MEET_REQUEST: <Image src={MeetRequestIcon} width="32px" height="32px" />,
    MOYEO_NOTICE: <Image src={MoyeoLogoIcons} width="32px" height="32px" />,
};
export interface NotificationItemProps {
    notification: NotificationDto;
}
export function NotificationItem({ notification }: NotificationItemProps) {
    return (
        <StyledNotificationContainer>
            <StyledLogo>{NotificationIconMap[notification.type]}</StyledLogo>
            <Flex.Column>
                <Flex.Between>
                    <StyledAuthor>{notification.author.name}</StyledAuthor>
                    <StyledCreatedAt>{notification.createdAt}</StyledCreatedAt>
                </Flex.Between>
                <StyledTitle>{notification.title}</StyledTitle>
                <StyledBody>{notification.body}</StyledBody>
            </Flex.Column>
        </StyledNotificationContainer>
    );
}
