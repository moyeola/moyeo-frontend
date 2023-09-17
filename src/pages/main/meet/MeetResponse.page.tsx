import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../libs/api";
import {
    BottomLayout,
    Button,
    Flex,
    Header,
    IconButton,
    Layout,
    MeetResult,
    Section,
    useModal,
} from "../../../libs/ui";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";
import dayjs from "dayjs";
import { dayOfTheWeekMap } from "../../../libs/ui/utils/dayOfTheWeekMap";
import { useGroup } from "../../../hooks/useGroup";

export function MeetResponsePage() {
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
                <Header.Right></Header.Right>
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
                <Button>일정조율 마감</Button>
            </BottomLayout>
        </>
    );
}
