import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./sign-up/page";
import { SignUpProfilePage } from "./sign-up/profile/page";

export function AuthRouter() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-up/profile" element={<SignUpProfilePage />} />
        </Routes>
    );
}
