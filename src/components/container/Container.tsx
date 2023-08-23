import { styled } from "styled-components";
import { Color } from "../../style/theme";

export type ContainerProps = {
    center?: boolean;
    gap?: number;
    color?: Color;
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
    background-color: ${({ theme, color }) => theme.color[color || "bgHome"]};

    ${({ center }) =>
        center &&
        `
        min-height: 100vh;
        align-items: center;
        text-align: center;
        justify-content: center;
    `}
`;
