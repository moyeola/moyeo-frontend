import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import { RootRouter } from "./pages/router";
import { MoyeoUiWrapper } from "./libs/ui";

const queryClient = new QueryClient();

function App() {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <MoyeoUiWrapper>
                    <RootRouter />
                </MoyeoUiWrapper>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default App;
