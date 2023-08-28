import { styled } from "styled-components";

interface LayoutOuterProps {
    $bgColor?: string;
    $minHeight?: string;
}
const LayoutOuter = styled.div<LayoutOuterProps>`
    width: 100%;
    background-color: ${(props) => props.$bgColor};
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.$minHeight};
`;

interface LayoutInnerProps {
    $paddingTop: string;
    $paddingBottom: string;
}
const LayoutInner = styled.div<LayoutInnerProps>`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    max-width: 500px;
    margin: 0px 18px;
    padding-top: ${(props) => props.$paddingTop};
    padding-bottom: ${(props) => props.$paddingBottom};
`;

interface LayoutProps {
    children?: React.ReactNode;
    bgColor?: string;
    paddingTop?: string;
    paddingBottom?: string;
    minHeight?: string;
}

/**
 * 일반적인 컴포넌트 배치를 위한 레이아웃입니다.
 */
export function Layout({
    children,
    bgColor,
    paddingTop = "24px",
    paddingBottom = "24px",
    minHeight = "unset",
}: LayoutProps) {
    return (
        <LayoutOuter $bgColor={bgColor} $minHeight={minHeight}>
            <LayoutInner
                $paddingTop={paddingTop}
                $paddingBottom={paddingBottom}
            >
                {children}
            </LayoutInner>
        </LayoutOuter>
    );
}
