import { styled } from "styled-components";
import { cv } from "../../../style";

export const IntroTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;

    & > span {
        color: ${cv.primary};
    }
`;
