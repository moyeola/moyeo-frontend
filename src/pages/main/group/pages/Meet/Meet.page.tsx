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
import { useUser } from "../../../../../hooks/useUser";

export function GroupMeetPage() {
    const modal = useModal();
    const navigate = useNavigate();
    const [meetStatus, setMeetStatus] = useState<"PROGRESSING" | "CONFIRMED">(
        "PROGRESSING"
    );
    const { user } = useUser();
    const { group } = useGroup();
    const userMember = user?.members.find(
        (member) => member?.group?.id === group?.id
    );

    const { data } = useQuery(
        ["group", group?.id, "meets", meetStatus],
        async () => {
            const res = await client.meets.list({
                creatorType: "group",
                creatorId: group?.id || -1,
                status: meetStatus,
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
                                value: "PROGRESSING",
                                onClick: () => setMeetStatus("PROGRESSING"),
                            },
                            {
                                title: "완료",
                                value: "CONFIRMED",
                                onClick: () => setMeetStatus("CONFIRMED"),
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
                    <Section.Header title="일정 조율" />
                    {data?.map((meet) => {
                        const respond = meet.responses.some(
                            (response) =>
                                response.responser.type === "member" &&
                                response.responser.member?.id === userMember?.id
                        );

                        let description = "";
                        if (!respond) {
                            description = `일정 조율을 입력해주세요 (${
                                meet?.responses?.length || 0
                            }/${group?.members.length}명)`;
                        } else {
                            if (
                                meet?.responses?.length ===
                                group?.members.length
                            ) {
                                description = "전원 참여 완료";
                            } else {
                                description = `${group?.members.length}명 중 ${
                                    meet?.responses?.length || 0
                                }명 참여 중`;
                            }
                        }

                        return (
                            <Entity
                                key={meet.id}
                                banner={{
                                    type: "icon",
                                    icon: "calendar",
                                }}
                                title={meet.title}
                                onClick={() =>
                                    navigate(`/main/meets/${meet.id}`)
                                }
                                description={description}
                                inactive={respond}
                            />
                        );
                    })}
                    {data &&
                        data.length === 0 &&
                        meetStatus === "PROGRESSING" && (
                            <EmptyEntity>
                                진행 중인 일정 조율이 없습니다.
                            </EmptyEntity>
                        )}

                    {data &&
                        data.length === 0 &&
                        meetStatus === "CONFIRMED" && (
                            <EmptyEntity>
                                완료된 일정 조율이 없습니다.
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
