import { useNavigate } from "react-router-dom";
import {
    Flex,
    Header,
    IconButton,
    Layout,
    RedButton,
    Section,
    Spinner,
    Switch,
    TextField,
    useModal,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { CaretLeft } from "@phosphor-icons/react";
import { useGroup } from "../../../../../hooks/useGroup";
import { MemberItem } from "./containers/MemberItem";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { client } from "../../../../../libs/api";
import { DeleteGroupModal } from "./containers/DeleteGroupModal";

interface Form {
    active: boolean;
    name: string;
    description: string;
}

export function EditGroupPage() {
    const modal = useModal();
    const { group } = useGroup();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setValue, register, handleSubmit } = useForm<Form>();
    useEffect(() => {
        setValue("active", group?.status === "ACTIVE");
        setValue("name", group?.name || "");
        setValue("description", group?.description || "");
    }, [group, setValue]);

    const { mutate: updateGroup, isLoading } = useMutation(
        async (data: Form) =>
            client.groups.patch({
                groupId: `${group?.id}`,
                description: data.description || "",
                name: data.name || "",
                status: data.active ? "ACTIVE" : "INACTIVE",
            }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["group", group?.id]);
                navigate(`/main/groups/${group?.id}`);
            },
        }
    );

    const submit = async (data: Form) => {
        updateGroup(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Header bgColor={cv.bgOnboarding}>
                <Header.Left>
                    <IconButton
                        onClick={() => navigate(`/main/groups/${group?.id}`)}
                    >
                        <CaretLeft weight="regular" color={cv.gray01} />
                    </IconButton>
                </Header.Left>
                <Header.Title>그룹 편집</Header.Title>
                <Header.Right>
                    {isLoading ? <Spinner /> : <IconButton>완료</IconButton>}
                </Header.Right>
            </Header>
            <Layout>
                <Flex.Column gap="52px">
                    <Section>
                        <Section.Header title="그룹 정보" />
                        <Switch label="그룹 활성화" {...register("active")} />
                        <TextField
                            label="그룹명"
                            placeholder="그룹명을 입력해주세요"
                            maxLength={10}
                            {...register("name", {
                                required: "필수 항목이에요",
                                maxLength: 10,
                            })}
                        />
                        <TextField
                            label="그룹소개"
                            placeholder="팀소개를 입력해주세요"
                            maxLength={20}
                            {...register("description", {
                                maxLength: 20,
                            })}
                        />
                    </Section>
                    <Section>
                        <Section.Header title="멤버 관리" />
                        <Flex.Column>
                            {group?.members.map((member) => (
                                <MemberItem key={member.id} member={member} />
                            ))}
                        </Flex.Column>
                    </Section>
                    <Flex.Between>
                        <div />
                        <RedButton
                            onClick={() =>
                                modal.open(
                                    <DeleteGroupModal
                                        groupId={group?.id || -1}
                                    />
                                )
                            }
                        >
                            그룹 삭제
                        </RedButton>
                    </Flex.Between>
                </Flex.Column>
            </Layout>
        </form>
    );
}
