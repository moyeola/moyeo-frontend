import { styled } from "styled-components";

export type SpacerProps = {
    height: number | string;
};
export const Spacer = styled.div<SpacerProps>`
    width: 100%;
    height: ${({ height }) =>
        typeof height === "number" ? `${height}px` : height};
`;
