import { styled } from "styled-components";

export type ImageProps = {
    width?: string;
    height?: string;
};

/**
 * 이미지를 편리하기 사용하기 위한 컴포넌트입니다.
 */
export const Image = styled.img<ImageProps>`
    max-width: 100%;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
`;
