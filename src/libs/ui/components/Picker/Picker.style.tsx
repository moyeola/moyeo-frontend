import { styled } from "styled-components";
import { cv } from "../../style";

export const StyledPicker = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 224px; // 32px * 7
    overflow: hidden;
    padding: 16px 0px;

    &::before {
        height: 96px;
        width: 100%;
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        background-color: ${cv.gray07};
        opacity: 0.6;
        border-bottom: 1px solid ${cv.gray05};

        user-select: none;
        pointer-events: none;
    }

    &::after {
        height: 96px;
        width: 100%;
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        background-color: ${cv.gray07};
        opacity: 0.6;
        border-top: 1px solid ${cv.gray05};

        user-select: none;
        pointer-events: none;
    }
`;
