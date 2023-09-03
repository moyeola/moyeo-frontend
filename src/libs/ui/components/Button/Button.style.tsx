import { styled } from "styled-components";
import { ButtonType } from ".";
import { cv } from "../../style";

export const buttonStyleByType: {
    [key in ButtonType]: {
        abled: string;
        disabled: string;
    };
} = {
    primary: {
        abled: `
            background-color: ${cv.primary};
            color: ${cv.gray07};

            &:hover {
                background-color: ${cv.statusHover};
            }
        `,
        disabled: `
            background-color: ${cv.statusInactive};
            color: ${cv.gray07};

            &:hover {
                background-color: ${cv.statusInactive};
            }
        `,
    },
};

export const StyledButton = styled.button<{
    variant: ButtonType;
    disabled: boolean;
}>`
    ${({ variant, disabled }) =>
        buttonStyleByType[variant || "primary"][
            disabled ? "disabled" : "abled"
        ]}
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    height: 56px;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: 150ms;
`;
