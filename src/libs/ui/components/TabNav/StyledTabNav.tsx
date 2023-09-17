import styled from "styled-components";
import { cv } from "../../style";

export const StyledTabNav = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    width: 100%;
    gap: 20px;
`;

interface StyledTabNavTabProps {
    $selected: boolean;
    $disabled?: boolean;
}
export const StyledTabNavTab = styled.div<StyledTabNavTabProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding: 10px;
    flex: 1 1;
    cursor: pointer;
    user-select: none;
    transition: 150ms;

    border-bottom: 2px solid
        ${(props) => (props.$selected ? cv.gray01 : cv.gray07)};

    &:hover {
        border-bottom: 2px solid
            ${(props) => (props.$selected ? cv.gray01 : cv.gray06)};
    }
`;
