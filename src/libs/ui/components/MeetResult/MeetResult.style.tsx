import styled from "styled-components";
import { cv } from "../../style";

export const StyledMeetPicker = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledDateContainer = styled.div`
    padding-left: 50px;
    display: flex;
`;

export const StyledDateLabel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
`;

export const StyledDateLabelDayOfTheWeek = styled.div`
    font-size: 10px;
`;

export const StyledDateLabelDay = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

export const StyledTimeLabel = styled.div`
    font-size: 11px;
    width: 50px;
    min-width: 50px;
    display: flex;
    justify-content: right;
    padding-right: 8px;
    user-select: none;
    border-right: 1px solid ${cv.gray06};
`;

export const StyledMeetRows = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledMeetRow = styled.div`
    display: flex;
`;

interface StyledMeetCellProps {
    $isFirstRow: boolean;
    $isLastRow: boolean;
    $isHalf: boolean;
    $isSelected: boolean;
    $ratio: number;
}
const ratioToColor = (ratio: number) => {
    if (ratio >= 0.8) return cv.time80;
    if (ratio >= 0.6) return cv.time60;
    if (ratio >= 0.4) return cv.time40;
    if (ratio >= 0.2) return cv.time20;
    return cv.time0;
};
export const StyledMeetCell = styled.div<StyledMeetCellProps>`
    width: 100%;
    height: 24px;
    border-right: 1px solid ${cv.gray06};
    ${(props) => !props.$isHalf && `border-top: 1px solid ${cv.gray06};`}
    ${(props) => props.$isFirstRow && `border-top: 1px solid ${cv.gray06};`}
    ${(props) => props.$isLastRow && `border-bottom: 1px solid ${cv.gray06};`}
    cursor: pointer;
    background-color: ${(props) =>
        props.$ratio ? ratioToColor(props.$ratio) : cv.time0};
    ${(props) => props.$isSelected && `border: 1px solid ${cv.primary};`}
`;

export const StyledMeetPickerPagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

interface StyledMeetPickerPaginationButtonProps {
    $selected?: boolean;
}
export const StyledMeetPickerPaginationButton = styled.button<StyledMeetPickerPaginationButtonProps>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background-color: ${cv.gray07};
    cursor: pointer;
    transition: 150ms;

    &:hover {
        background-color: ${cv.gray06};
    }

    ${(props) =>
        props.$selected &&
        `
        font-weight: bold;
        background-color: ${cv.gray06};
    `}
`;
