import { styled } from "styled-components";
import { cv } from "../../../libs/ui/style";

export const StyledGroupButton = styled.button`
    background-color: ${cv.bgOnboarding};
    border: 0;
    outline: 0;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 150ms;
    border-radius: 4px;
    color: ${cv.gray01};

    &::before {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background-color: ${cv.primary};
    }

    &:hover {
        background-color: ${cv.gray06};
    }

    &:read-only {
    }
`;
