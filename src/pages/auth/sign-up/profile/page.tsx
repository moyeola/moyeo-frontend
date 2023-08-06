import { useState } from "react";
import {
    BottomLayout,
    Button,
    Container,
    PageLayout,
    Spacer,
} from "../../../../components";
import { TextField } from "../../../../components/input";
import { IntroTitle } from "../../components/IntroTitle";
import { ImageSelect } from "../../components/imageSelect";

export function SignUpProfilePage() {
    const [image, setImage] = useState<File>();
    const [nickname, setNickname] = useState("");

    return (
        <>
            <PageLayout>
                <Spacer height={80} />
                <Container gap={70}>
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
                </Container>
            </PageLayout>
            <BottomLayout>
                <Container>
                    <Button disabled={!image || !nickname}>가입 완료</Button>
                </Container>
            </BottomLayout>
        </>
    );
}
