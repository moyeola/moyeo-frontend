import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home/page";
import { Redirect } from "../../components";
import { GroupRouter } from "./group/router";
import { CalendarRouter } from "./calender/router";

export function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Redirect to="/main/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/groups/*" element={<GroupRouter />} />
            <Route path="/calendar/*" element={<CalendarRouter />} />
        </Routes>
    );
}
