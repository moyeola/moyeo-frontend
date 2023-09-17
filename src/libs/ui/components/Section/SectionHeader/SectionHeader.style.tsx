import { styled } from "styled-components";
import { cv } from "../../../style";

export const StyledSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledSectionHeaderTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${cv.gray01};
`;

export const StyledSectionHeaderDescription = styled.div`
    font-size: 12px;
`;

export const StyledSectionHeaderMoveButton = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: ${cv.gray01};
    text-decoration: none;
    cursor: pointer;
`;
