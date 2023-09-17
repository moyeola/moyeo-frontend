import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../../libs/api";
import {
    BottomLayout,
    Button,
    Header,
    IconButton,
    Layout,
    Section,
} from "../../../libs/ui";
import { CaretLeft } from "@phosphor-icons/react";
import { MeetPicker } from "../../../libs/ui/components/MeetPicker";
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { toast } from "react-toastify";

// TODO: 현재는 그룹 모드로만 동작하도록 되어있습니다. 추후 유저 모드로 동작하기 위해서는 수정이 필요합니다.

export function EditMeetPage() {
    const { meetId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [times, setTimes] = useState<
        {
            start: string;
            end: string;
        }[]
    >([]);

    const { user } = useUser();

    const { data: meet } = useQuery(
        ["meet", meetId],
        async () => {
            const res = await client.meets.get({
                meetId: `${meetId}`,
            });
            return res.meet;
        },
        {
            onSuccess: (data) => {
                if (
                    !data.responses.some((response) =>
                        user?.members.some(
                            (member) =>
                                response.responser.type === "member" &&
                                response.responser.member?.id === member?.id
                        )
                    )
                ) {
                    navigate(`/main/meets/${meetId}`);
                }

                setTimes(
                    data.responses.find(
                        (response) =>
                            response.responser.type === "member" &&
                            response.responser.member?.id === memberId
                    )?.times || []
                );
            },
        }
    );

    const group =
        meet?.creator.type === "member" ? meet.creator.member?.group : null;
    const memberId = user?.members.find(
        (member) => member?.group?.id === group?.id
    )?.id;

    const { mutate } = useMutation(
        () =>
            client.meets.response.patch({
                meetId: `${meetId}`,
                responseId: `${
                    meet?.responses.find(
                        (response) =>
                            response.responser.type === "member" &&
                            response.responser.member?.id === memberId
                    )?.id
                }`,
                times,
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["meet", meetId]);
                navigate(`/main/meets/${meetId}/responses`);
            },
            onError: (error) => {
                console.error(error);
                toast.error("일정 조율을 수정하는데 실패했습니다.");
            },
            onMutate: () => {
                console.log(times);
            },
        }
    );

    return (
        <>
            <Header>
                <Header.Left>
                    <IconButton
                        onClick={() =>
                            navigate(`/main/meets/${meet?.id}/responses`)
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
                    <Section.Header title="가능한 시간을 체크해주세요" />
                    {meet && (
                        <MeetPicker
                            dates={meet.dates}
                            startTimeAt={meet.startTimeAt}
                            endTimeAt={meet.endTimeAt}
                            setTimes={setTimes}
                            times={times}
                        />
                    )}
                </Section>
            </Layout>
            <BottomLayout>
                <Button onClick={() => mutate()}>입력 완료</Button>
            </BottomLayout>
        </>
    );
}
