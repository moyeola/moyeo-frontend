import { Plus } from "@phosphor-icons/react";
import { EmptyEntity, Entity, Section } from "../../../../../libs/ui";
import { CreateGroupButton } from "../../../../../components";
import { useNavigate } from "react-router-dom";

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
            <Entity
                title="IT 프로젝트"
                subtitle="대학생을 하나로 모아주는, 모여!"
                description="알림 2개"
                banner={{
                    type: "icon",
                    icon: "fire",
                }}
            />
            <Entity
                title="IT 프로젝트"
                subtitle="대학생을 하나로 모아주는, 모여!"
                description="비활성화 그룹"
                banner={{
                    type: "icon",
                    icon: "fire",
                }}
                inactive
            />
            <EmptyEntity>
                <span
                    style={{
                        fontWeight: "bold",
                    }}
                >
                    현재 소속된 팀이 없습니다.
                </span>
                <br />
                팀을 개설하거나 가입해보세요!
            </EmptyEntity>
            <CreateGroupButton onClick={() => navigate("/main/groups/create")}>
                <Plus /> 팀 개설하기
            </CreateGroupButton>
        </Section>
    );
}
