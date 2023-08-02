import React from "react";
import { MainRouter } from "./pages/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <MainRouter />
                </ThemeProvider>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
