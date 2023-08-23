import { styled } from "styled-components";

export const TitleLabel = styled.h1`
    font-size: 20px;
    font-weight: 600;

    & > span {
        color: ${({ theme }) => theme.color.gray01};
    }
`;