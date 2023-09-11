import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home/page";
import { Redirect } from "../../components";
import { GroupRouter } from "./group/router";

export function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<Redirect to="/main/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/groups/*" element={<GroupRouter />} />
        </Routes>
    );
}
