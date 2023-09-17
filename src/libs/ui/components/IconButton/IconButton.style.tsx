import styled from "styled-components";

export interface StyledIconButtonProps {
    $size: number | string;
}
export const StyledIconButton = styled.button<StyledIconButtonProps>`
    display: flex;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    outline: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
