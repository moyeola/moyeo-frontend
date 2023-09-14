import { ButtonHTMLAttributes } from "react";
import { StyledRedButton } from "./RedButton.style";
import { Spinner } from "..";

export interface RedButtonProps {
    children?: React.ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    disabled?: boolean;
    isLoading?: boolean;
    type?: "button" | "submit" | "reset";
}

/**
 * 버튼 컴포넌트입니다.
 */
export function RedButton({
    children,
    onClick,
    disabled = false,
    isLoading = false,
    type = "button",
}: RedButtonProps) {
    return (
        <StyledRedButton
            onClick={onClick}
            disabled={disabled || isLoading}
            type={type}
        >
            {isLoading ? <Spinner /> : children}
        </StyledRedButton>
    );
}
