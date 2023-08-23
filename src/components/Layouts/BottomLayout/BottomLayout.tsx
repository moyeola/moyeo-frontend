import { styled } from "styled-components";

interface BottomLayoutOuterProps {
    $bgColor?: string;
}
const BottomLayoutOuter = styled.div<BottomLayoutOuterProps>`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background-color: ${(props) => props.$bgColor};
    display: flex;
    justify-content: center;
`;

interface BottomLayoutInnerProps {
    $paddingTop: string;
    $paddingBottom: string;
}
const BottomLayoutInner = styled.div<BottomLayoutInnerProps>`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    max-width: 500px;
    margin: 0px 18px;
    padding-top: ${(props) => props.$paddingTop};
    padding-bottom: ${(props) => props.$paddingBottom};
`;

export interface BottomLayoutProps {
    children?: React.ReactNode;
    bgColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
}
export function BottomLayout({
    children,
    bgColor,
    paddingTop = "24px",
    paddingBottom = "24px",
}: BottomLayoutProps) {
    return (
        <BottomLayoutOuter $bgColor={bgColor}>
            <BottomLayoutInner
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
            >
                {children}
            </BottomLayoutInner>
        </BottomLayoutOuter>
    );
}
