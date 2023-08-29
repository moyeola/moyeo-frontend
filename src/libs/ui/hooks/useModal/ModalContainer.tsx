import { useEffect, useRef, useState } from "react";
import {
    StyledModalContainer,
    StyledModalContainerWrapper,
    StyledModalContainerBackground,
} from "./ModalContainer.style";

export interface ModalContainerProps {
    children?: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    hasPadding?: boolean;
    width?: string;
    direction?: "center" | "bottom";
}
export function ModalContainer({
    children,
    isOpen,
    setIsOpen,
    hasPadding = true,
    width = "fit-content",
    direction = "center",
}: ModalContainerProps) {
    /**
     * isOpen은 Modal이 데이터 적으로 열리 있는지 여부를 의미하고
     * isShow는 Modal이 트랜지션을 포함해서 화면에 표시되고 있는지 여부를 의미합니다.
     */
    const [isShow, setIsShow] = useState(false);
    const transitionTimer = useRef<NodeJS.Timeout>();
    const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setIsShow(true);
        } else {
            clearTimeout(transitionTimer.current);
            transitionTimer.current = setTimeout(() => {
                setIsOpen(false);
                setIsShow(false);
            }, 300);
        }
    }, [isOpen, setIsOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalContentRef.current &&
                !modalContentRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                event.preventDefault();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsOpen]);

    if (!isShow) {
        return null;
    }

    return (
        <StyledModalContainerWrapper $isOpen={isOpen} $direction={direction}>
            <StyledModalContainerBackground $isOpen={isOpen} />
            <StyledModalContainer
                $isOpen={isOpen}
                $width={width}
                $isPadding={hasPadding}
                ref={modalContentRef}
                $direction={direction}
            >
                {children}
            </StyledModalContainer>
        </StyledModalContainerWrapper>
    );
}
