import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import {
    StyledModalContainer,
    StyledModalContainerWrapper,
    StyledModalContainerBackground,
} from "./ModalContainer.style";

export interface ModalContainerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    closeFinish: () => void;
    hasPadding?: boolean;
    width?: string;
    direction?: "center" | "bottom";
}
export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>(
    (
        {
            children,
            isOpen,
            closeFinish,
            hasPadding = true,
            width = "fit-content",
            direction = "center",
        },
        ref
    ) => {
        /**
         * isOpen은 Modal이 데이터 적으로 열리 있는지 여부를 의미하고
         * isShow는 Modal이 트랜지션을 포함해서 화면에 표시되고 있는지 여부를 의미합니다.
         */
        const [isShow, setIsShow] = useState(false);
        const transitionTimer = useRef<NodeJS.Timeout>();

        const closeModal = useCallback(() => {
            clearTimeout(transitionTimer.current);
            transitionTimer.current = setTimeout(() => {
                closeFinish();
                setIsShow(false);
            }, 300);
        }, [closeFinish]);

        useEffect(() => {
            if (isOpen) {
                setIsShow(true);
            } else {
                closeModal();
            }
        }, [closeModal, isOpen]);

        if (!isShow) {
            return null;
        }

        return (
            <StyledModalContainerWrapper
                $isOpen={isOpen}
                $direction={direction}
            >
                <StyledModalContainerBackground $isOpen={isOpen} />
                <StyledModalContainer
                    $isOpen={isOpen}
                    $width={width}
                    $isPadding={hasPadding}
                    ref={ref}
                    $direction={direction}
                >
                    {children}
                </StyledModalContainer>
            </StyledModalContainerWrapper>
        );
    }
);
