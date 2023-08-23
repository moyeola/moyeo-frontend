import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IntroPage } from "./intro/index.page";
import { AuthRouter } from "./auth/router";
import { MainRouter } from "./main/router";

function IndexPage() {
    return <div>Index Page</div>;
}

export function RootRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/intro" element={<IntroPage />} />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="/main/*" element={<MainRouter />} />
            </Routes>
        </BrowserRouter>
    );
}
