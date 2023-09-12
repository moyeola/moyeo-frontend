import { Plus } from "@phosphor-icons/react";
import { EmptyEntity, Entity, Section } from "../../../../../libs/ui";
import { CreateGroupButton } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../hooks/useUser";
import { cv } from "../../../../../libs/ui/style";

export function GroupSection() {
    const navigate = useNavigate();
    const { groups } = useUser();

    return (
        <Section>
            <Section.Header
                title="팀 프로젝트"
                moveButton={{
                    text: "그룹",
                    onClick: () => navigate("/main/groups"),
                }}
            />
            {groups.length !== 0 &&
                groups.map((group) => (
                    <Entity
                        key={group?.id}
                        title={
                            group?.name || (
                                <span style={{ color: cv.gray05 }}>
                                    (그룹 이름 없음)
                                </span>
                            )
                        }
                        subtitle={group?.description}
                        description="알림 2개"
                        banner={{
                            type: "icon",
                            icon: "fire",
                        }}
                        onClick={() => navigate(`/main/groups/${group?.id}`)}
                    />
                ))}
            {groups.length === 0 && (
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
            )}

            <CreateGroupButton onClick={() => navigate("/main/groups/create")}>
                <Plus /> 팀 개설하기
            </CreateGroupButton>
        </Section>
    );
}
