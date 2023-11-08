import { NotificationDto, NotificationType } from "moyeo-object";
import styled from "styled-components";
import { Flex, Image } from "../../../../libs/ui";

import GroupScheduleIcon from "../assets/GroupSchedule.png";
import MeetRequestIcon from "../assets/MeetRequestIcon.png";
import MoyeoLogoIcons from "../../../../assets/logo/moyeoColorLogo.png";
import { cv } from "../../../../libs/ui/style";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const StyledNotificationContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
`;

const StyledLogo = styled.div`
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledAuthor = styled.div`
    font-size: 12px;
    color: ${cv.gray04};
`;

const StyledCreatedAt = styled.div`
    font-size: 12px;
    color: ${cv.gray03};
`;

const StyledTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${cv.gray01};
`;

const StyledBody = styled.div`
    font-size: 12px;
    color: ${cv.gray04};
`;

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
            <Flex.Column
                style={{
                    width: "100%",
                }}
                gap="2px"
            >
                <Flex.Between
                    style={{
                        width: "100%",
                    }}
                >
                    <StyledAuthor>{notification.author.name}</StyledAuthor>
                    <StyledCreatedAt>
                        {dayjs(notification.createdAt).fromNow()}
                    </StyledCreatedAt>
                </Flex.Between>
                <Flex.Column gap="2px">
                    <StyledTitle>{notification.title}</StyledTitle>
                    <StyledBody>{notification.body}</StyledBody>
                </Flex.Column>
            </Flex.Column>
        </StyledNotificationContainer>
    );
}
