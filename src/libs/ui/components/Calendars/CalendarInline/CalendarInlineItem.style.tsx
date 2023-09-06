import { styled } from "styled-components";
import { cv } from "../../../style";

export const StyledCalendarInlineItem = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    align-items: flex-start;
    flex-direction: column;
    overflow-x: hidden;
    cursor: pointer;
`;

export const StyledCalendarInlineItemDayOfTheWeek = styled.p`
    font-size: 10px;
    color: ${cv.gray01};
    width: 100%;
    text-align: center;
`;

export const StyledCalendarInlineItemDay = styled.p`
    font-size: 14px;
    color: ${cv.gray01};
    width: 100%;
    text-align: center;
    font-weight: bold;
`;

export const StyledCalendarInlineItemEvents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 4px;
`;

export const StyledCalendarInlineItemEvent = styled.div`
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
