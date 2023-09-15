import { Route, Routes } from "react-router-dom";
import { CalendarPage } from "./page";
import { FilterCalendarPage } from "./pages/FilterCalendar/FilterCalendar.page";

export function CalendarRouter() {
    return (
        <Routes>
            <Route path="/" element={<CalendarPage/>} />
            <Route path="/filter" element={<FilterCalendarPage/>} />
        </Routes>
    );
}
