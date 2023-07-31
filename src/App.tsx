import React from "react";
import { MainRouter } from "./pages/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <MainRouter />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
