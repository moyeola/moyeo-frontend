import { Flex, Image, TopLayout } from "../../../../../components";
import MoyeoLogo from "../../../../../assets/logo/moyeoColorLogo.png";
import { Bell } from "@phosphor-icons/react";
import { styled } from "styled-components";
import { cv } from "../../../../../style";

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

function NoticeBell({ hasNotice }: { hasNotice: boolean }) {
    return (
        <NoticeBellContainer>
            <Bell size={24} weight="fill" color={cv.statusInactive} />
            {hasNotice && <NoticeBellDot />}
        </NoticeBellContainer>
    );
}

export function HomeHeader() {
    return (
        <TopLayout>
            <Flex justify="space-between">
                <Image src={MoyeoLogo} alt="Moyeo Logo" height="28px" />
                <NoticeBell hasNotice={true} />
            </Flex>
        </TopLayout>
    );
}
