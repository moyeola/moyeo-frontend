import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "./page";

export function CalendarRouter() {
    return (
        <Routes>
            <Route path="/" element={<CalendarPage/>} />
        </Routes>
    );
}
