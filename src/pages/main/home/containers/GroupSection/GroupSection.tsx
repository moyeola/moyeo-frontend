import { Plus } from "@phosphor-icons/react";
import { Section } from "../../../../../libs/ui";
import { CreateGroupButton } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { GroupList } from "../../../../../containers/GroupList/GroupList";

export function GroupSection() {
    const navigate = useNavigate();

    return (
        <Section>
            <Section.Header
                title="팀 프로젝트"
                moveButton={{
                    text: "그룹",
                    onClick: () => navigate("/main/groups"),
                }}
            />
            <GroupList />
            <CreateGroupButton onClick={() => navigate("/main/groups/create")}>
                <Plus /> 팀 개설하기
            </CreateGroupButton>
        </Section>
    );
}
