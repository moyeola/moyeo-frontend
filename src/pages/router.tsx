import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from ".";

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    );
}
