import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./Button.style";
import { Spinner } from "..";

export type ButtonType = "primary" | "secondary";

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
    isLoading?: boolean;
    type?: "button" | "submit" | "reset";
}

/**
 * 버튼 컴포넌트입니다.
 */
export function Button({
    children,
    onClick,
    variant = "primary",
    disabled = false,
    isLoading = false,
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
                disabled={disabled || isLoading}
            >
                {isLoading ? <Spinner /> : children}
            </StyledButton>
        );

    if (as === "Link") {
        return (
            <StyledButton
                as={Link}
                type={type}
                to={to || "/"}
                disabled={disabled || isLoading}
                variant={variant}
            >
                {isLoading ? <Spinner /> : children}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled || isLoading}
            variant={variant}
            type={type}
        >
            {isLoading ? <Spinner /> : children}
        </StyledButton>
    );
}
