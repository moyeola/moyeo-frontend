import { Header, IconButton, Layout, TextField } from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ImageSelect } from "../../../auth/components/imageSelect";
import { useState } from "react";

interface FormInput {
    nickname: string;
}

export function ProfileEdit() {
    const navigate = useNavigate();
    const [image, setImage] = useState<File | undefined>();

    const defaultNickname = "개미는 뚠뚠";

    const { register, handleSubmit, setValue } = useForm<FormInput>({
        defaultValues: {
            nickname: defaultNickname,
        }
    });

    // 닉네임 저장 함수 (이 부분에 실제 저장 로직을 구현해야 합니다)
    const saveNickname = (data: FormInput) => {
        // 여기에 API 호출 또는 다른 로직을 추가하여 닉네임을 저장합니다.
        console.log(data.nickname);  // 저장된 닉네임 확인용
    };

    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left>
                    <IconButton onClick={() => navigate("/main/mypage")}>
                        취소
                    </IconButton>
                </Header.Left>
                <Header.Title>프로필 편집</Header.Title>
                <Header.Right>
                    <IconButton onClick={handleSubmit(saveNickname)}>
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
                <ImageSelect setImage={setImage} image={image}/>
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
        </>
    );
}
