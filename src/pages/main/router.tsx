import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home/page";

export function MainRouter() {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}
