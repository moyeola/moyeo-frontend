import { Route, Routes } from "react-router-dom";
import { MeetPage } from "./Meet.page";
import { MeetResponsePage } from "./MeetResponse.page";
import { EditMeetPage } from "./EditMeet.page";

export function MeetRouter() {
    return (
        <Routes>
            <Route path=":meetId" element={<MeetPage />} />
            <Route path=":meetId/responses" element={<MeetResponsePage />} />
            <Route path=":meetId/edit" element={<EditMeetPage />} />
        </Routes>
    );
}
