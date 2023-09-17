import { ButtonHTMLAttributes } from "react";
import { StyledSmallButton } from "./SmallButton.style";
import { Spinner } from "..";

export type SmallButtonVariant = "red" | "primary" | "secondary";
export interface SmallButtonProps {
    children?: React.ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    disabled?: boolean;
    isLoading?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: SmallButtonVariant;
}

/**
 * 버튼 컴포넌트입니다.
 */
export function SmallButton({
    children,
    onClick,
    disabled = false,
    isLoading = false,
    type = "button",
    variant = "primary",
}: SmallButtonProps) {
    return (
        <StyledSmallButton
            onClick={onClick}
            disabled={disabled || isLoading}
            $variant={variant}
            type={type}
        >
            {isLoading ? <Spinner /> : children}
        </StyledSmallButton>
    );
}
