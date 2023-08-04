import { styled } from "styled-components";

export type ContainerProps = {
    center?: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    max-width: 632px;
    width: 100%;
    padding: 0 16px;
    height: 100%;

    ${({ center }) =>
        center &&
        `
        min-height: 100vh;
        align-items: center;
        text-align: center;
        justify-content: center;
    `}
`;
