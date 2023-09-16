import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../libs/api";
import {
    BottomLayout,
    Button,
    Header,
    IconButton,
    Layout,
    MeetResult,
    Section,
} from "../../../libs/ui";
import { CaretLeft } from "@phosphor-icons/react";
import { useState } from "react";

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
            </Layout>
            <BottomLayout>
                <Button>일정 확정</Button>
            </BottomLayout>
        </>
    );
}
