import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "./signUp.page";
import { SignUpProfilePage } from "./profile.page";

export function AuthRouter() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-up/profile" element={<SignUpProfilePage />} />
        </Routes>
    );
}
