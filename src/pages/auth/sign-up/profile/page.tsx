import { useState } from "react";
import {
    BottomLayout,
    Button,
    Flex,
    Layout,
    TextField,
} from "../../../../components";
import { IntroTitle } from "../../components/IntroTitle";
import { ImageSelect } from "../../components/imageSelect";

export function SignUpProfilePage() {
    const [image, setImage] = useState<File>();
    const [nickname, setNickname] = useState("");

    return (
        <>
            <Layout paddingTop="80px">
                <Flex column gap={70}>
                    <IntroTitle>
                        모여에서 사용할
                        <br />
                        <span>닉네임과 프로필</span>을 설정해주세요
                    </IntroTitle>
                    <ImageSelect
                        setImage={(image) => setImage(image)}
                        image={image}
                    />
                    <TextField
                        label="닉네임"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        maxLength={10}
                    />
                </Flex>
            </Layout>
            <BottomLayout>
                <Button disabled={!image || !nickname}>가입 완료</Button>
            </BottomLayout>
        </>
    );
}
