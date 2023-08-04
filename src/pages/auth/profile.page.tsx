import {
    BottomLayout,
    Button,
    Container,
    PageLayout,
    Spacer,
} from "../../components";
import { IntroTitle } from "./components/IntroTitle";

export function SignUpProfilePage() {
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
                </Container>
            </PageLayout>
            <BottomLayout>
                <Container>
                    <Button disabled>가입 완료</Button>
                </Container>
            </BottomLayout>
        </>
    );
}
