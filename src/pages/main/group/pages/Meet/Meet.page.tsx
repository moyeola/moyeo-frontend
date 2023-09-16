import { useState } from "react";
import {
    BottomLayout,
    Button,
    EmptyEntity,
    Entity,
    Header,
    IconButton,
    Layout,
    Section,
    useModal,
} from "../../../../../libs/ui";
import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useGroup } from "../../../../../hooks/useGroup";
import { TabNav } from "../../../../../libs/ui/components/TabNav/TabNav";
import { cv } from "../../../../../libs/ui/style";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";
import { CreateMeetModal } from "../../../../../containers/modals/CreateMeetModal/CreateMeetModal";

export function GroupMeetPage() {
    const modal = useModal();
    const navigate = useNavigate();
    const [meetStatus, setMeetStatus] = useState<"inProgress" | "finished">(
        "inProgress"
    );
    const { group } = useGroup();

    const { data } = useQuery(
        ["group", group?.id, "meets", meetStatus],
        async () => {
            const res = await client.meets.list({
                creator: {
                    type: "group",
                    groupId: group?.id || -1,
                },
            });
            return res.meets;
        },
        {
            enabled: !!group?.id,
        }
    );

    return (
        <>
            <Header
                subChildren={
                    <TabNav
                        tabs={[
                            {
                                title: "진행 중",
                                value: "inProgress",
                                onClick: () => setMeetStatus("inProgress"),
                            },
                            {
                                title: "완료",
                                value: "finished",
                                onClick: () => setMeetStatus("finished"),
                            },
                        ]}
                        selected={meetStatus}
                    />
                }
            >
                <Header.Left>
                    <IconButton
                        onClick={() => navigate(`/main/groups/${group?.id}`)}
                    >
                        <CaretLeft weight="regular" color={cv.gray01} />
                    </IconButton>
                </Header.Left>
                <Header.Title>{group?.name} 일정조율</Header.Title>
                <Header.Right />
            </Header>
            <Layout bgColor={cv.bgHome} paddingTop="120px">
                <Section>
                    <Section.Header title="진행 중인 일정 조율" />
                    {data?.map((meet) => (
                        <Entity
                            key={meet.id}
                            banner={{
                                type: "icon",
                                icon: "calendar",
                            }}
                            title={meet.title}
                            description={meet.description}
                            onClick={() =>
                                navigate(
                                    `/main/groups/${group?.id}/meets/${meet.id}`
                                )
                            }
                            subtitle={
                                meet?.responses?.length || 0 + "명 참여 중"
                            }
                        />
                    ))}
                    {data && data.length === 0 && (
                        <EmptyEntity>
                            진행 중인 일정 조율이 없습니다.
                        </EmptyEntity>
                    )}
                </Section>
            </Layout>
            <BottomLayout>
                <Button
                    type="button"
                    onClick={() =>
                        modal.open(
                            <CreateMeetModal groupId={group?.id || -1} />,
                            {
                                direction: "bottom",
                            }
                        )
                    }
                >
                    일정 조율 생성하기
                </Button>
            </BottomLayout>
        </>
    );
}
