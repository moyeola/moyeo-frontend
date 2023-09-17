import { ModalContextProvider } from "../../hooks/useModal/modal.context";
import { GlobalStyles } from "../../style/globalStyle";

export function MoyeoUiWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ModalContextProvider>
            <GlobalStyles />
            {children}
        </ModalContextProvider>
    );
}
