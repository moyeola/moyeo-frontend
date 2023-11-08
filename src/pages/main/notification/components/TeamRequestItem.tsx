import styled from "styled-components";
import { Flex } from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";

const StyledTeamRequest = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    border-bottom: 0.3px solid ${cv.gray05};
`;

const StyledIcon = styled.div`
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
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

const PlusSVG = () => (
    <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M31 22.5C31 22.6879 30.9254 22.868 30.7925 23.0009C30.6597 23.1337 30.4795 23.2083 30.2917 23.2083H23.2083V30.2917C23.2083 30.4795 23.1337 30.6597 23.0009 30.7925C22.868 30.9254 22.6879 31 22.5 31C22.3121 31 22.132 30.9254 21.9991 30.7925C21.8663 30.6597 21.7917 30.4795 21.7917 30.2917V23.2083H14.7083C14.5205 23.2083 14.3403 23.1337 14.2075 23.0009C14.0746 22.868 14 22.6879 14 22.5C14 22.3121 14.0746 22.132 14.2075 21.9991C14.3403 21.8663 14.5205 21.7917 14.7083 21.7917H21.7917V14.7083C21.7917 14.5205 21.8663 14.3403 21.9991 14.2075C22.132 14.0746 22.3121 14 22.5 14C22.6879 14 22.868 14.0746 23.0009 14.2075C23.1337 14.3403 23.2083 14.5205 23.2083 14.7083V21.7917H30.2917C30.4795 21.7917 30.6597 21.8663 30.7925 21.9991C30.9254 22.132 31 22.3121 31 22.5Z"
            fill="#252525"
        />
        <rect
            x="0.75"
            y="0.75"
            width="43.5"
            height="43.5"
            rx="21.75"
            stroke="#252525"
            stroke-width="1.5"
        />
    </svg>
);

export function TeamRequestItem() {
    return (
        <StyledTeamRequest>
            <StyledIcon>
                <PlusSVG />
            </StyledIcon>
            <Flex.Column gap="2px">
                <StyledTitle>팀 요청</StyledTitle>
                <StyledBody>팀의 요청사항을 확인합니다</StyledBody>
            </Flex.Column>
        </StyledTeamRequest>
    );
}
