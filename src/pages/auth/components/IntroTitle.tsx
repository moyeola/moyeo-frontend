import { styled } from "styled-components";

export const IntroTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;

    & > span {
        color: ${({ theme }) => theme.color.primary};
    }
`;
