import {
    Flex,
    Header,
    IconButton,
    Image,
    Layout,
    TextField,
} from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../hooks/useUser";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { client } from "../../../../libs/api";

interface FormInput {
    nickname: string;
}

export function ProfileEdit() {
    const navigate = useNavigate();
    const { user } = useUser();
    const { register, handleSubmit, setValue } = useForm<FormInput>({});

    useEffect(() => {
        setValue("nickname", user?.name || "");
    }, [setValue, user?.name]);

    const { mutate } = useMutation(
        (data: FormInput) =>
            client.users.me.patch({
                name: data.nickname,
            }),
        {
            onSuccess: () => {
                navigate("/main/mypage");
            },
        }
    );

    const saveNickname = (data: FormInput) => {
        mutate(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(saveNickname)}>
                <Header bgColor={cv.bgHome}>
                    <Header.Left>
                        <IconButton
                            type="button"
                            onClick={() => navigate("/main/mypage")}
                        >
                            취소
                        </IconButton>
                    </Header.Left>
                    <Header.Title>프로필 편집</Header.Title>
                    <Header.Right>
                        <IconButton
                            type="submit"
                            onClick={handleSubmit(saveNickname)}
                        >
                            저장
                        </IconButton>
                    </Header.Right>
                </Header>
                <Layout
                    paddingTop="90px"
                    paddingBottom="120px"
                    bgColor={cv.bgHome}
                    minHeight="100dvh"
                >
                    {/* <ImageSelect setImage={setImage} image={image} /> */}
                    <Flex.Center>
                        <Image
                            src={user?.profileImageUrl}
                            width="128px"
                            height="128px"
                        />
                    </Flex.Center>
                    <TextField
                        label="닉네임"
                        placeholder="변경할 닉네임을 입력해주세요"
                        maxLength={10}
                        {...register("nickname", {
                            required: "필수 항목이에요",
                            maxLength: 10,
                        })}
                    />
                </Layout>
            </form>
        </>
    );
}
