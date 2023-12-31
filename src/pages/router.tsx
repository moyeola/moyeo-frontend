import { Route, Routes } from "react-router-dom";
import { IntroPage } from "./intro/index.page";
import { AuthRouter } from "./auth/router";
import { MainRouter } from "./main/router";
import { Redirect } from "../components";
import { TermsofService } from "./terms/Terms.page";
import { InvitePage } from "./invite/Invite.page";

export function RootRouter() {
    return (
        <Routes>
            <Route path="/" element={<Redirect to="/main/home" />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/terms" element={<TermsofService />} />
            <Route path="/auth/*" element={<AuthRouter />} />
            <Route path="/main/*" element={<MainRouter />} />
            <Route path="/invite/:inviteCode" element={<InvitePage />} />
        </Routes>
    );
}
