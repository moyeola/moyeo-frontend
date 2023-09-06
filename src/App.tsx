import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { RootRouter } from "./pages/router";
import { MoyeoUiWrapper } from "./libs/ui";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <MoyeoUiWrapper>
                        <RootRouter />
                    </MoyeoUiWrapper>
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
