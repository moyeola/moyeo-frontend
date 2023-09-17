import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../libs/api";
import {
    BottomLayout,
    Button,
    Flex,
    Header,
    HorizontalScroll,
    IconButton,
    Layout,
    MeetResult,
    ProfileItem,
    Section,
    useModal,
} from "../../../libs/ui";
import { CaretLeft, PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";
import dayjs from "dayjs";
import { dayOfTheWeekMap } from "../../../libs/ui/utils/dayOfTheWeekMap";
import { EditMeetModal } from "../../../containers/modals/EditMeetModal/EditMeetModal";

export function MeetResponsePage() {
    const modal = useModal();
    const { meetId } = useParams();
    const navigate = useNavigate();
    const [time, setTime] = useState<{
        start: string;
        end: string;
    }>();

    const { data: meet } = useQuery(["meet", meetId], async () => {
        const res = await client.meets.get({
            meetId: `${meetId}`,
        });
        return res.meet;
    });

    return (
        <>
            <Header>
                <Header.Left>
                    <IconButton
                        onClick={() =>
                            navigate(
                                `/main/groups/${
                                    meet?.creator.type === "member" &&
                                    meet.creator.member?.group?.id
                                }/meets`
                            )
                        }
                    >
                        <CaretLeft weight="bold" />
                    </IconButton>
                </Header.Left>
                <Header.Title>{meet?.title}</Header.Title>
                <Header.Right>
                    <IconButton
                        onClick={() =>
                            meet &&
                            modal.open(<EditMeetModal meet={meet} />, {
                                direction: "bottom",
                            })
                        }
                    >
                        <PencilSimple />
                    </IconButton>
                </Header.Right>
            </Header>
            <Layout>
                <Flex.Column gap="32px">
                    <Section>
                        {meet && (
                            <MeetResult
                                dates={meet.dates}
                                startTimeAt={meet.startTimeAt}
                                endTimeAt={meet.endTimeAt}
                                time={time}
                                setTime={setTime}
                                responses={meet.responses}
                            />
                        )}
                    </Section>
                    <Section>
                        <Section.Header
                            title="해당 시간에 가능한 팀원들"
                            description={`${dayjs(time?.start).format(
                                `M.D(${dayOfTheWeekMap(
                                    dayjs(time?.start).format("ddd")
                                )}) HH:mm`
                            )} ~ ${dayjs(time?.end).format("HH:mm")}`}
                        />
                        <HorizontalScroll>
                            {meet?.responses
                                .filter((response) =>
                                    response.times.some(
                                        (responseTime) =>
                                            time?.start ===
                                                responseTime?.start &&
                                            time?.end === responseTime?.end
                                    )
                                )
                                .map((response) => {
                                    return (
                                        <ProfileItem
                                            imageUrl={
                                                response.responser.type ===
                                                "member"
                                                    ? response.responser.member
                                                          ?.user
                                                          ?.profileImageUrl ||
                                                      ""
                                                    : ""
                                            }
                                            name={
                                                response.responser.type ===
                                                "member"
                                                    ? response.responser.member
                                                          ?.nickname ||
                                                      response.responser.member
                                                          ?.user?.name
                                                    : ""
                                            }
                                        />
                                    );
                                })}
                        </HorizontalScroll>
                    </Section>

                    <Section>
                        <Section.Header
                            title="미참여 팀원들"
                            description="참여를 독려하기 위해 독촉하기를 해보세요"
                        />
                    </Section>
                </Flex.Column>
            </Layout>
            <BottomLayout>
                <Button>
                    {dayjs(time?.start).format(
                        `M.D(${dayOfTheWeekMap(
                            dayjs(time?.start).format("ddd")
                        )}) HH:mm`
                    )}{" "}
                    일정 생성
                </Button>
            </BottomLayout>
        </>
    );
}
