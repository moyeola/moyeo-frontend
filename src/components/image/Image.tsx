import { styled } from "styled-components";

export type ImageProps = {
    width?: string;
    height?: string;
};

export const Image = styled.img<ImageProps>`
    max-width: 100%;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
`;
