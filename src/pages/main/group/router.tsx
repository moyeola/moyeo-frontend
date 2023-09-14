import { Route, Routes } from "react-router-dom";
import { GroupsPage } from "./page";
import { CreateGroupPage } from "./pages/CreateGroup/CreateGroup.page";
import { GroupPage } from "./pages/Group/Group.page";
import { EditGroupPage } from "./pages/EditGroup/EditGroup.page";

export function GroupRouter() {
    return (
        <Routes>
            <Route path="/" element={<GroupsPage />} />
            <Route path="/create" element={<CreateGroupPage />} />
            <Route path="/:groupId" element={<GroupPage />} />
            <Route path="/:groupId/edit" element={<EditGroupPage />} />
        </Routes>
    );
}
