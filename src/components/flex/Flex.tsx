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
    alignSelf?: 
        | "center";
    alignContent?:
        | "center";
    wrap?: "wrap" | "nowrap";
    gap?: number;
    width?: string;
    height?: string;
};
export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ column }) => (column ? "column" : "row")};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};

    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    align-self: ${({ alignSelf }) => alignSelf || "center"};
    align-content: ${({ alignContent }) => alignContent || "center"}
    
    gap: ${({ gap }) => gap || 0}px;

    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
`;
