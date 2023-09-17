import { CaretLeft } from "@phosphor-icons/react";
import {
    BottomLayout,
    Button,
    Flex,
    Header,
    IconButton,
    Layout,
    TextField,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { client } from "../../../../../libs/api";
import { useForm } from "react-hook-form";
import { APIResponseError } from "endpoint-client";
import { toast } from "react-toastify";

interface Form {
    name: string;
    description: string;
}

export function CreateGroupPage() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<Form>();

    const { mutate, isLoading } = useMutation(client.groups.post, {
        onSuccess: (data) => {
            toast.info("그룹이 생성되었어요!");
            navigate(`/main/groups/${data.group.id}`);
        },
        onError: (err) => {
            if (err instanceof APIResponseError) {
                toast.error("서버에서 오류를 응답했어요.");
            } else {
                toast.error("알 수 없는 문제가 발생했어요.");
            }
        },
    });

    const createGroup = (data: Form) => {
        mutate({
            name: data.name,
            description: data.description,
        });
    };

    return (
        <form onSubmit={handleSubmit(createGroup)}>
            <Header bgColor={cv.bgOnboarding}>
                <Header.Left>
                    <IconButton type="button" onClick={() => navigate(-1)}>
                        <CaretLeft />
                    </IconButton>
                </Header.Left>
                <Header.Title>그룹 생성</Header.Title>
                <Header.Right></Header.Right>
            </Header>
            <Layout bgColor={cv.bgOnboarding}>
                <Flex.Column gap="20px">
                    <TextField
                        label="그룹 명"
                        placeholder="그룹 명을 입력해주세요"
                        maxLength={10}
                        {...register("name", {
                            required: "필수 항목이에요",
                            maxLength: 10,
                        })}
                    />
                    <TextField
                        label="팀 소개"
                        placeholder="팀 소개를 입력해주세요"
                        maxLength={20}
                        {...register("description", {
                            required: "필수 항목이에요",
                            maxLength: 20,
                        })}
                    />
                </Flex.Column>
            </Layout>
            <BottomLayout>
                <Button type="submit" isLoading={isLoading}>
                    그룹 생성하기
                </Button>
            </BottomLayout>
        </form>
    );
}
