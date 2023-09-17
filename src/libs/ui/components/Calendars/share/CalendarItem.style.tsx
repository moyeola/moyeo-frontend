import { styled } from "styled-components";
import { cv } from "../../../style";

export const StyledCalendarItem = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    padding: 4px 8px 4px 4px;
    align-items: flex-start;
    flex-direction: column;
    overflow-x: hidden;
    cursor: pointer;
`;

export const StyledCalendarItemDayOfTheWeek = styled.p`
    font-size: 10px;
    color: ${cv.gray01};
    width: 100%;
    text-align: center;
`;

export const StyledCalendarItemDay = styled.p`
    font-size: 14px;
    color: ${cv.gray01};
    width: 100%;
    text-align: center;
    font-weight: bold;
`;

export const StyledCalendarItemEvents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 4px;
    min-height: 40px;
`;

export const StyledCalendarItemEvent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: ${cv.gray01};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        background-color: ${cv.primary};
        border-radius: 50%;
    }
`;
