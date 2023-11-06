import React, { forwardRef } from "react";
import { styled } from "styled-components";

export interface TextProps extends React.ComponentProps<"p"> {
    font?: "default" | "mono";
    weight?: string;
    warp?: "normal" | "nowrap" | "pre" | "pre-wrap";
    size?: string;
    color?: string;
    align?: "left" | "center" | "right";
}

interface StyledTextProps {
    $font?: "default" | "mono";
    $weight?: string;
    $warp?: "normal" | "nowrap" | "pre" | "pre-wrap";
    $size?: string;
    $color?: string;
    $align?: "left" | "center" | "right";
}

const StyledText = styled.p<StyledTextProps>`
    font-family: ${(props) =>
        props.$font === "mono"
            ? "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
            : "inherit"};
    font-weight: ${(props) => props.$weight || "400"};
    font-size: ${(props) => props.$size || "16px"};
    color: ${(props) => props.$color || "inherit"};
    white-space: ${(props) => props.$warp || "normal"};
    text-align: ${(props) => props.$align || "inherit"};
`;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
    ({ font, weight, warp, size, color, align, children, ...props }, ref) => {
        return (
            <StyledText
                ref={ref}
                $font={font}
                $weight={weight}
                $warp={warp}
                $size={size}
                $color={color}
                $align={align}
                {...props}
            >
                {children}
            </StyledText>
        );
    }
);
