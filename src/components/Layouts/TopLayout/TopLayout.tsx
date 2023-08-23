import { styled } from "styled-components";

interface LayoutOuterProps {
    $bgColor?: string;
}
const TopLayoutOuter = styled.div<LayoutOuterProps>`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: ${(props) => props.$bgColor};
    display: flex;
    justify-content: center;
`;

interface LayoutInnerProps {
    $paddingTop: string;
    $paddingBottom: string;
}
const TopLayoutInner = styled.div<LayoutInnerProps>`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    max-width: 500px;
    margin: 0px 18px;
    padding-top: ${(props) => props.$paddingTop};
    padding-bottom: ${(props) => props.$paddingBottom};
`;

export interface TopLayoutProps {
    children?: React.ReactNode;
    bgColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
}
export function TopLayout({
    children,
    bgColor,
    paddingTop = "24px",
    paddingBottom = "24px",
}: TopLayoutProps) {
    return (
        <TopLayoutOuter $bgColor={bgColor}>
            <TopLayoutInner
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
            >
                {children}
            </TopLayoutInner>
        </TopLayoutOuter>
    );
}
