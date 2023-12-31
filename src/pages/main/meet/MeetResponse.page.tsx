import { useMutation, useQuery } from "react-query";
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
    SmallButton,
    useModal,
} from "../../../libs/ui";
import { CaretLeft, PencilSimple } from "@phosphor-icons/react";
import { useState } from "react";
import dayjs from "dayjs";
import { dayOfTheWeekMap } from "../../../libs/ui/utils/dayOfTheWeekMap";
import { EditMeetModal } from "../../../containers/modals/EditMeetModal/EditMeetModal";
// import { useUser } from "../../../hooks/useUser";
import { useGroup } from "../../../hooks/useGroup";
import { CreateEventModal } from "../../../containers/modals/CreateEventModal/CreateEventModal";
import { toast } from "react-toastify";
import { DeleteMeetModal } from "../../../containers/modals/DeleteMeetModal/DeleteMeetModal";

import PressImage from "./press.svg";
import { MeetPressFinishModal } from "./modal/meetPressFinishModal";

export function MeetResponsePage() {
    const modal = useModal();
    const { meetId } = useParams();
    const navigate = useNavigate();
    const [time, setTime] = useState<{
        start: string;
        end: string;
    }>();

    // const { user } = useUser();

    const { data: meet } = useQuery(["meet", meetId], async () => {
        const res = await client.meets.get({
            meetId: `${meetId}`,
        });
        return res.meet;
    });

    const { group } = useGroup(
        (meet?.creator.type === "member" && meet.creator.member?.group?.id) ||
            -1
    );

    const { data: calendars } = useQuery(
        ["group", group?.id || -1, "calendars"],
        async () => {
            const res = await client.calendars.search({
                ownerType: "group",
                ownerId: group?.id || -1,
            });
            return res.calendars;
        }
    );

    const { mutate: expedite, isLoading: expediteLoading } = useMutation(
        () =>
            client.meets.expedite({
                meetId: `${meetId}`,
            }),
        {
            onSuccess: () => {
                modal.open(<MeetPressFinishModal />);
            },
            onError: (err) => {
                toast.error(
                    `독촉하기에 실패했어요. 잠시 뒤에 다시 시도해주세요.`
                );
                console.error(err);
            },
        }
    );

    // const isCreator =
    //     meet?.creator.type === "member" &&
    //     meet.creator.member?.user?.id === user?.id &&
    //     true;

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
                        onClick={() => navigate(`/main/meets/${meetId}/edit`)}
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
                        {(
                            group?.members.filter(
                                (member) =>
                                    !meet?.responses.some(
                                        (response) =>
                                            response.responser.type ===
                                                "member" &&
                                            response.responser.member?.id ===
                                                member?.id
                                    )
                            ) || []
                        ).length > 0 && (
                            <>
                                <Section.Header
                                    title="미참여 팀원들"
                                    description="미참여 팀원들에게 '독촉 알림'을 보내고 싶다면, '독촉하기'를 클릭해보세요!"
                                />
                                <HorizontalScroll>
                                    <ProfileItem
                                        imageUrl={PressImage}
                                        onClick={() => expedite()}
                                        name={
                                            expediteLoading ? "독촉 중..." : ``
                                        }
                                    />
                                    {group?.members
                                        .filter(
                                            (member) =>
                                                !meet?.responses.some(
                                                    (response) =>
                                                        response.responser
                                                            .type ===
                                                            "member" &&
                                                        response.responser
                                                            .member?.id ===
                                                            member?.id
                                                )
                                        )
                                        .map((member) => {
                                            return (
                                                <ProfileItem
                                                    imageUrl={
                                                        member?.user
                                                            ?.profileImageUrl ||
                                                        ""
                                                    }
                                                    name={
                                                        member?.nickname ||
                                                        member?.user?.name
                                                    }
                                                />
                                            );
                                        })}
                                </HorizontalScroll>
                            </>
                        )}
                    </Section>

                    {/* {isCreator && ( */}
                    <Section>
                        <Section.Header title="일정 조율 " />
                        <Flex.Between>
                            <SmallButton
                                variant="secondary"
                                onClick={() =>
                                    meet &&
                                    modal.open(<EditMeetModal meet={meet} />, {
                                        direction: "bottom",
                                    })
                                }
                            >
                                일정조율 수정
                            </SmallButton>
                            <SmallButton
                                variant="red"
                                onClick={() =>
                                    meet &&
                                    modal.open(
                                        <DeleteMeetModal
                                            meet={meet}
                                            group={group}
                                        />
                                    )
                                }
                            >
                                일정조율 삭제
                            </SmallButton>
                        </Flex.Between>
                    </Section>
                    {/* )} */}
                </Flex.Column>
            </Layout>
            <BottomLayout>
                <Button
                    disabled={!time}
                    onClick={() =>
                        modal.open(
                            <CreateEventModal
                                calendarId={calendars?.[0]?.id}
                                defaultValue={{
                                    date: time?.start,
                                    title: meet?.title,
                                }}
                                callback={() =>
                                    toast.info("일정이 생성되었어요")
                                }
                            />,
                            {
                                direction: "bottom",
                            }
                        )
                    }
                >
                    {time ? (
                        <>
                            {dayjs(time?.start).format(
                                `M.D(${dayOfTheWeekMap(
                                    dayjs(time?.start).format("ddd")
                                )}) HH:mm`
                            )}{" "}
                            일정 생성
                        </>
                    ) : (
                        <>시간을 선택해주세요</>
                    )}
                </Button>
            </BottomLayout>
        </>
    );
}
