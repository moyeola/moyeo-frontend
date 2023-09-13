import { Plus } from "@phosphor-icons/react";
import { CreateGroupButton } from "../../../components";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import { Layout, Section } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { GroupsHeader } from "./containers/GroupsHeader";
import { useNavigate } from "react-router-dom";
import { GroupList } from "../../../containers/GroupList/GroupList";

export function GroupsPage() {
    const navigate = useNavigate();

    return (
        <>
            <GroupsHeader />
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
                <Section>
                    <GroupList />
                    <CreateGroupButton
                        onClick={() => navigate("/main/groups/create")}
                    >
                        <Plus /> 팀 개설하기
                    </CreateGroupButton>
                </Section>
            </Layout>
            <AppNavBar selected="group" />
        </>
    );
}
