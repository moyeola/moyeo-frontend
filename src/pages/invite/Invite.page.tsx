import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../../libs/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button, Layout, Spinner } from "../../libs/ui";
import styled from "styled-components";
import { APIResponseError } from "endpoint-client";

const ScreenCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100%;
`;

export function InvitePage() {
    const navigate = useNavigate();
    const { inviteCode } = useParams();
    const [description, setDescription] = useState("");

    const { mutate, isLoading } = useMutation(
        (inviteCode: string) =>
            client.groups.invite({
                inviteCode: inviteCode || "",
            }),
        {
            onSuccess: (res) => {
                navigate(`/main/groups/${res.member.group?.id}`);
                toast.info(`${res.member.group?.name} 그룹에 초대되었어요.`);
            },
            onError: (err) => {
                if (err instanceof APIResponseError) {
                    if (err.body.code === "group_not_found") {
                        setDescription(
                            "잘못된 초대 코드에요. 다시 확인해주세요."
                        );
                    } else if (err.body.code === "already_in_group") {
                        toast.info("이미 그룹에 속해있어요.");
                        navigate(`/main/groups/${err.body.groupId}`);
                    } else {
                        console.error(err);
                        toast.error("그룹 초대에 실패했어요.");
                    }
                }
            },
            retry: false,
        }
    );

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/intro");
            toast.info("먼저 로그인해주세요.");
        }
    }, [navigate]);

    return (
        <Layout>
            <ScreenCenter>
                {description && <p>{description}</p>}
                {isLoading && (
                    <>
                        잠시만 기다려주세요.
                        <Spinner />
                    </>
                )}
                {!isLoading && (
                    <Button onClick={() => mutate(inviteCode || "")}>
                        그룹 초대 수락하기
                    </Button>
                )}
            </ScreenCenter>
        </Layout>
    );
}
