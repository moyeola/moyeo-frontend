import { styled } from "styled-components";
import { Color } from "../../style/theme";

export type TextProps = {
    color?: Color;
};
export const Text = styled.p<TextProps>`
    color: ${({ theme, color }) => theme.color[color || "gray07"]};
`;
