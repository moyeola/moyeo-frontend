import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { RuleSet, css, styled } from "styled-components";
import { cv } from "../../style";

type ButtonType = "primary" | "secondary";

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    /**
     * 버튼의 스타일입니다.
     */
    variant?: ButtonType;
    /**
     * 버튼을 a 엘리먼트나, Link 컴포넌트로 사용할 수 있습니다.
     */
    as?: "a" | "Link";
    /**
     * as='Link"로 지정하였을 때 사용하는 속성입니다.
     */
    to?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const buttonStyleByType: {
    [key in ButtonType]: {
        abled: RuleSet<object>;
        disabled: RuleSet<object>;
    };
} = {
    primary: {
        abled: css`
            background-color: ${cv.primary};
            color: ${cv.gray07};
        `,
        disabled: css`
            background-color: ${cv.statusInactive};
            color: ${cv.gray07};
        `,
    },
    secondary: {
        abled: css`
            background-color: ${cv.secondary};
            color: ${cv.gray07};
        `,
        disabled: css`
            background-color: ${cv.statusInactive};
            color: ${cv.gray07};
        `,
    },
};

const StyledButton = styled.button<{ variant: ButtonType; disabled: boolean }>`
    ${({ variant, disabled }) =>
        buttonStyleByType[variant || "primary"][
            disabled ? "disabled" : "abled"
        ]}
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

/**
 * 버튼 컴포넌트입니다.
 */
export function Button({
    children,
    onClick,
    variant = "primary",
    disabled = false,
    as,
    to,
    type = "button",
}: ButtonProps) {
    if (as === "a")
        return (
            <StyledButton
                as="a"
                variant={variant}
                href={to}
                disabled={disabled}
            >
                {children}
            </StyledButton>
        );

    if (as === "Link") {
        return (
            <StyledButton
                as={Link}
                type={type}
                to={to || "/"}
                disabled={disabled}
                variant={variant}
            >
                {children}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            variant={variant}
            type={type}
        >
            {children}
        </StyledButton>
    );
}
