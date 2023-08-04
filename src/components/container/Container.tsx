import { styled } from "styled-components";

export type ContainerProps = {
    center?: boolean;
    gap?: number;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    max-width: 632px;
    width: 100%;
    padding: 0 16px;
    height: 100%;
    margin: 0 auto;
    gap: ${({ gap }) => gap || 0}px;

    ${({ center }) =>
        center &&
        `
        min-height: 100vh;
        align-items: center;
        text-align: center;
        justify-content: center;
    `}
`;
