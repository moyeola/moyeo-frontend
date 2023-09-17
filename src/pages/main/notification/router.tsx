import { Route, Routes } from "react-router-dom";
import { NotificationPage } from "./page";

export function NotificationRouter() {
    return (
        <Routes>
            <Route path="/" element={<NotificationPage />} />
        </Routes>
    );
}
