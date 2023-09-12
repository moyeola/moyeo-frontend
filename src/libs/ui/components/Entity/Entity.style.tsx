import { styled } from "styled-components";
import { cv } from "../../style";

export const StyledEntity = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${cv.bgOnboarding};
    border-radius: 12px;
    width: 100%;
    min-height: 96px;
    position: relative;
    cursor: pointer;
`;

export const StyledEntityLeft = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 28px 32px;
`;

export const StyledEntityTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

export const StyledEntitySubTitle = styled.div`
    font-size: 12px;
    font-weight: bold;
`;

export interface StyledEntityDescriptionProps {
    $inactive: boolean;
}
export const StyledEntityDescription = styled.div<StyledEntityDescriptionProps>`
    font-size: 12px;
    color: ${({ $inactive }) => ($inactive ? cv.statusInactive : cv.primary)};
    margin-top: 4px;
    font-weight: bold;
`;

export const StyledEntityRight = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
`;

export const StyledEntityBannerImage = styled.img`
    height: 100%;
    user-select: none;
`;
