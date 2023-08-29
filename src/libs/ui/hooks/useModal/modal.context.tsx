import { createContext, useCallback, useState } from "react";
import { ModalContainer } from "./ModalContainer";

export interface ModalContextProps {
    isOpen: boolean;
    open: (
        content: React.ReactNode,
        option?: {
            width?: string;
            direction?: "center" | "bottom";
            hasPadding?: boolean;
        }
    ) => void;
    close: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    open: () => {},
    close: () => {},
});

export function ModalContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState<{
        content: React.ReactNode;
        width: string;
        direction: "center" | "bottom";
        hasPadding: boolean;
    }>({
        content: null,
        width: "fit-content",
        direction: "center",
        hasPadding: true,
    });

    const open = useCallback(
        (
            content: React.ReactNode,
            options?: {
                width?: string;
                direction?: "center" | "bottom";
                hasPadding?: boolean;
            }
        ) => {
            setModalData({
                content,
                width: options?.width || "100%",
                direction: options?.direction || "center",
                hasPadding: options?.hasPadding || true,
            });
            setIsOpen(true);
        },
        []
    );

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                open,
                close,
            }}
        >
            <ModalContainer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                hasPadding={modalData.hasPadding}
                width={modalData.width}
                direction={modalData.direction}
            >
                {modalData.content}
            </ModalContainer>
            {children}
        </ModalContext.Provider>
    );
}
