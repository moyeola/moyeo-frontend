import { styled } from "styled-components";
import { cv } from "../../style";

export const buttonStyleByType: {
    abled: string;
    disabled: string;
} = {
    abled: `
        background-color: ${cv.delete1};
        color: ${cv.gray07};
    `,
    disabled: `
        background-color: ${cv.statusInactive};
        color: ${cv.gray07};

        &:hover {
            background-color: ${cv.statusInactive};
        }
    `,
};

export const StyledRedButton = styled.button<{
    disabled: boolean;
}>`
    ${({ disabled }) => buttonStyleByType[disabled ? "disabled" : "abled"]}
    border: none;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    height: 40px;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: 150ms;
`;
