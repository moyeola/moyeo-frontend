import { ButtonHTMLAttributes } from "react";
import { css, styled } from "styled-components";

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    type?: "primary" | "secondary";
}

const buttonStyleByType = {
    primary: css`
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.gray07};
    `,
    secondary: css`
        background-color: ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.gray07};
    `,
};

const StyledButton = styled.button<{ type: ButtonProps["type"] }>`
    ${({ type }) => buttonStyleByType[type || "primary"]}
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
`;

export function Button({ children, onClick, type = "primary" }: ButtonProps) {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    );
}
