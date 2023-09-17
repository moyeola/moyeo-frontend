import { Route, Routes } from "react-router-dom";
import { MyPage } from "./Mypage";
import { ProfileEdit } from "./pages/ProfileEdit.page";
import { Deletion } from "./pages/AccountDeletion.page";
import { TermsofService } from "./pages/TermsofService.page";


export function MyPageRouter() {
    return (
        <Routes>
            <Route path="/" element={<MyPage/>} />
            <Route path="/edit/" element={<ProfileEdit/>} />
            <Route path="/delete/" element={<Deletion/>} />
            <Route path="/TermsofService/" element={<TermsofService/>} />
        </Routes>
    );
}
