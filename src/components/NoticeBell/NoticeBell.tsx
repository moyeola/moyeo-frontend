import styled from "styled-components";
import { cv } from "../../libs/ui/style";
import { Bell } from "@phosphor-icons/react";

const NoticeBellContainer = styled.div`
    position: relative;
`;

const NoticeBellDot = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${cv.primary};
`;

export interface NoticeBellProps {
    hasNotice: boolean;
    onClick?: () => void;
}
export function NoticeBell({ hasNotice, onClick }: NoticeBellProps) {
    return (
        <NoticeBellContainer onClick={() => onClick && onClick()}>
            <Bell size={24} weight="fill" color={cv.statusInactive} />
            {hasNotice && <NoticeBellDot />}
        </NoticeBellContainer>
    );
}
