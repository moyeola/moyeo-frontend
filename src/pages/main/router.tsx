import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home/page";
import { Redirect } from "../../components";
import { GroupRouter } from "./group/router";
import { CalendarRouter } from "./calendar/router";
import { NotificationRouter } from "./notification/router";
import { MeetRouter } from "./meet/router";
import { MyPageRouter } from "./mypage/router";

export function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Redirect to="/main/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/groups/*" element={<GroupRouter />} />
            <Route path="/calendar/*" element={<CalendarRouter />} />
            <Route path="/notification/*" element={<NotificationRouter />} />
            <Route path="/meets/*" element={<MeetRouter />} />
            <Route path="/mypage/*" element={<MyPageRouter />} />
        </Routes>
    );
}
