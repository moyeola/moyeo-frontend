import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from ".";
import { IntroPage } from "./intro/index.page";

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/intro" element={<IntroPage />} />
            </Routes>
        </BrowserRouter>
    );
}
