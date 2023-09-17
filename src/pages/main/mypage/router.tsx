import { Route, Routes } from "react-router-dom";
import { MyPage } from "./Mypage";
import { ProfileEdit } from "./pages/ProfileEdit.page";

export function CalendarRouter() {
    return (
        <Routes>
            <Route path="/" element={<MyPage/>} />
            <Route path="/edit/" element={<ProfileEdit/>} />
        </Routes>
    );
}
