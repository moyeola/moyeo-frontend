import { forwardRef } from "react";
import styled from "styled-components";

interface StyledHorizontalScrollProps {
    $width: string;
    $gap: string;
}
const StyledHorizontalScroll = styled.div<StyledHorizontalScrollProps>`
    display: flex;
    overflow-x: auto;
    width: ${({ $width }) => $width};
    max-width: ${({ $width }) => $width};
    gap: ${({ $gap }) => $gap};
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export interface HorizontalScrollProps
    extends React.ComponentPropsWithRef<"div"> {
    width?: string;
    gap?: string;
}
export const HorizontalScroll = forwardRef<
    HTMLDivElement,
    HorizontalScrollProps
>(({ children, width = "100%", gap = "0px", ...props }, ref) => {
    return (
        <StyledHorizontalScroll ref={ref} $width={width} $gap={gap} {...props}>
            {children}
        </StyledHorizontalScroll>
    );
});
