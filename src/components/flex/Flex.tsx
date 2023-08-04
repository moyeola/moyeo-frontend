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
    gap?: number;
};
export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ column }) => "column" || "row"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    gap: ${({ gap }) => gap || 0}px;
`;
