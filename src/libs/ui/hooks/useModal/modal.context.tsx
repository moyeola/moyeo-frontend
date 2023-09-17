import {
    createContext,
    createRef,
    useCallback,
    useEffect,
    useState,
} from "react";
import { ModalContainer } from "./ModalContainer";

type Modal = {
    content: React.ReactNode;
    isOpen: boolean;
    width: string;
    direction: "center" | "bottom";
    hasPadding: boolean;
    ref?: React.RefObject<HTMLDivElement>;
};

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
    closeAll: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    open: () => {},
    close: () => {},
    closeAll: () => {},
});

export function ModalContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [modals, setModals] = useState<Modal[]>([]);

    const open = useCallback(
        (
            content: React.ReactNode,
            options?: {
                width?: string;
                direction?: "center" | "bottom";
                hasPadding?: boolean;
            }
        ) => {
            setModals((prev) => [
                ...prev,
                {
                    content,
                    isOpen: true,
                    width: options?.width || "100%",
                    direction: options?.direction || "center",
                    hasPadding: options?.hasPadding || true,
                    ref: createRef(),
                },
            ]);
        },
        []
    );

    const close = useCallback(() => {
        setModals((prev) => {
            const newModals = [...prev];
            newModals[newModals.length - 1].isOpen = false;
            return newModals;
        });
    }, []);

    const closeFinish = useCallback(() => {
        setModals((prev) => {
            const newModals = [...prev];
            newModals.pop();
            return newModals;
        });
    }, []);

    const closeAll = useCallback(() => {
        setModals([]);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modals.length === 0) return;
            const modalRefs = modals.map((modal) => modal.ref?.current);
            const isClickOutside = modalRefs.every(
                (modalRef) =>
                    modalRef &&
                    !modalRef.contains(event.target as Node) &&
                    event.target !== modalRef
            );
            if (isClickOutside) {
                close();
                event.preventDefault();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [close, modals]);

    return (
        <ModalContext.Provider
            value={{
                isOpen: modals.length > 0,
                open,
                close,
                closeAll,
            }}
        >
            {modals.map((modal, index) => (
                <ModalContainer
                    key={index}
                    isOpen={modal.isOpen}
                    closeFinish={closeFinish}
                    hasPadding={modal.hasPadding}
                    width={modal.width}
                    direction={modal.direction}
                    ref={modal.ref}
                >
                    {modal.content}
                </ModalContainer>
            ))}
            {children}
        </ModalContext.Provider>
    );
}
