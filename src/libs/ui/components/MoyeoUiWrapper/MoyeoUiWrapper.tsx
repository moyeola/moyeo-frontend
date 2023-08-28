import { GlobalStyles } from "../../style/globalStyle";

export function MoyeoUiWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
}
