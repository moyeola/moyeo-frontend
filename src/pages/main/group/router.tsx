import { Route, Routes } from "react-router-dom";
import { GroupsPage } from "./page";
import { CreateGroupPage } from "./pages/CreateGroup/CreateGroup.page";
import { GroupPage } from "./pages/Group/Group.page";

export function GroupRouter() {
    return (
        <Routes>
            <Route path="/" element={<GroupsPage />} />
            <Route path="/create" element={<CreateGroupPage />} />
            <Route path="/:groupId" element={<GroupPage />} />
        </Routes>
    );
}
