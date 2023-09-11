import styled from "styled-components";
import { cv } from "../../../style";

export const StyledCalendar = styled.div`
    background-color: ${cv.bgOnboarding};
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    padding: 12px 5px;
    width: 100%;
    gap: 12px;
`;

export const StyledCalendarWeek = styled.div`
    background-color: ${cv.bgOnboarding};
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 4px;
`;
