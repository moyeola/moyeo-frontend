import { css, styled } from "styled-components";
import { cv } from "../../style";

export type StyledModalContainerWrapperProps = {
    $direction: "bottom" | "center";
    $isOpen: boolean;
};
export const StyledModalContainerWrapper = styled.div<StyledModalContainerWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: flex;
    align-items: ${(props) =>
        props.$direction === "bottom" ? "flex-end" : "center"};
    justify-content: center;
    padding: ${(props) =>
        props.$direction === "bottom" ? "30dvh 0px 0px 0px" : "16px"};
`;

export type StyledModalOverlayProps = {
    $isOpen: boolean;
};
export const StyledModalContainerBackground = styled.div<StyledModalOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: #000000;

    transition: 300ms;
    opacity: ${(props) => (props.$isOpen ? 0.2 : 0)};

    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.2;
        }
    }
    animation: opacity 300ms;
`;

export type StyledModalContainerProps = {
    $width: string;
    $isOpen: boolean;
    $isPadding: boolean;
    $direction: "bottom" | "center";
};
export const StyledModalContainer = styled.section<StyledModalContainerProps>`
    z-index: 10000;
    background-color: ${cv.bgOnboarding};
    color: ${cv.gray01};
    width: ${(props) => props.$width};
    max-width: 468px;
    max-height: 100%;
    overflow: auto;
    padding: ${(props) => (props.$isPadding ? "16px" : "0")};
    pointer-events: auto;
    transition: 300ms;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};

    @keyframes fadeInFromBottom {
        0% {
            transform: translateY(20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes fadeInFromTop {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    ${(props) =>
        props.$direction === "bottom" &&
        css`
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            transform: translateY(${props.$isOpen ? 0 : 20}px);
            animation: fadeInFromBottom 300ms;
        `}

    ${(props) =>
        props.$direction === "center" &&
        css`
            border-radius: 12px;
            transform: translateY(${props.$isOpen ? 0 : -20}px);
            animation: fadeInFromTop 300ms;
        `}
`;
