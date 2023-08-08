import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from ".";
import { IntroPage } from "./intro/index.page";
import { AuthRouter } from "./auth/router";

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/intro" element={<IntroPage />} />
                <Route path="/auth/*" element={<AuthRouter />} />
            </Routes>
        </BrowserRouter>
    );
}
