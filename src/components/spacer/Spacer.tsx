import { styled } from "styled-components";

export type SpacerProps = {
    height: number;
};
export const Spacer = styled.div<SpacerProps>`
    width: 100%;
    height: ${({ height }) => height}px;
`;
