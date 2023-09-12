import { Plus } from "@phosphor-icons/react";
import { CreateGroupButton } from "../../../components";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import {
    EmptyEntity,
    Entity,
    Layout,
    Section,
    Spinner,
} from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { GroupsHeader } from "./containers/GroupsHeader";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";

export function GroupsPage() {
    const navigate = useNavigate();
    const { groups } = useUser();

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
                    {groups &&
                        groups.length !== 0 &&
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
                                onClick={() =>
                                    navigate(`/main/groups/${group?.id}`)
                                }
                            />
                        ))}
                    {groups && groups.length === 0 && (
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
                    {!groups && (
                        <EmptyEntity>
                            <Spinner />
                        </EmptyEntity>
                    )}

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
