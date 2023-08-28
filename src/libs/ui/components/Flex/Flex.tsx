import { forwardRef } from "react";
import { styled } from "styled-components";

export type FlexProps = {
    column?: boolean;
    justify?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around";
    align?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around";
    wrap?: "wrap" | "nowrap";
    gap?: string | number;
    width?: string;
    height?: string;
};
const FlexLayout = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ column }) => (column ? "column" : "row")};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    gap: ${({ gap }) => gap || 0}px;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
`;

export type SubFlexProps = React.ComponentPropsWithRef<"div"> & {
    gap?: string;
    width?: string;
};

interface StyledSubFlexProps {
    $gap?: string;
    $width?: string;
}

const StyledFlexCenter = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.$gap && `gap: ${props.$gap}`};
    ${(props) => props.$width && `width: ${props.$width}`};
`;

const FlexCenter = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexCenter ref={ref} $gap={gap} $width={width} {...props}>
                {children}
            </StyledFlexCenter>
        );
    }
);

const StyledFlexBetween = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.$gap && `gap: ${props.$gap}`};
    ${(props) => props.$width && `width: ${props.$width}`};
`;

const FlexBetween = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexBetween ref={ref} $gap={gap} $width={width} {...props}>
                {children}
            </StyledFlexBetween>
        );
    }
);

const StyledFlexColumn = styled.div<StyledSubFlexProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.$gap && `gap: ${props.$gap}`};
    ${(props) => props.$width && `width: ${props.$width}`};
`;

const FlexColumn = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexColumn ref={ref} $gap={gap} $width={width} {...props}>
                {children}
            </StyledFlexColumn>
        );
    }
);

const StyledFlexRow = styled.div<StyledSubFlexProps>`
    display: flex;
    align-items: center;
    ${(props) => props.$gap && `gap: ${props.$gap}`};
    ${(props) => props.$width && `width: ${props.$width}`};
`;

const FlexRow = forwardRef<HTMLDivElement, SubFlexProps>(
    ({ gap, width, children, ...props }, ref) => {
        return (
            <StyledFlexRow ref={ref} $gap={gap} $width={width} {...props}>
                {children}
            </StyledFlexRow>
        );
    }
);

/**
 * 레이아웃을 위한 Flex 컴포넌트입니다.
 * \<Flex\>를 사용하거나, Flex.Center, Flex.Between, Flex.Column, Flex.Row를 사용할 수 있습니다.
 */
export const Flex = Object.assign(FlexLayout, {
    Center: FlexCenter,
    Between: FlexBetween,
    Column: FlexColumn,
    Row: FlexRow,
});
