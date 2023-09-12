import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { RootRouter } from "./pages/router";
import { MoyeoUiWrapper } from "./libs/ui";
import { BrowserRouter } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <MoyeoUiWrapper>
                        <GoogleOAuthProvider
                            clientId={
                                import.meta.env.VITE_OAUTH_GOOGLE_CLIENT_ID
                            }
                        >
                            <RootRouter />
                        </GoogleOAuthProvider>

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable
                            transition={Flip}
                        />
                    </MoyeoUiWrapper>
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    );
}

export default App;
