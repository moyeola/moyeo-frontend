import {
    Button,
    Flex,
    BottomLayout,
    Image,
    Text,
    Layout,
} from "../../components";
import MoyeoColorLogo from "../../assets/logo/moyeoColorLogo.png";

export function IntroPage() {
    return (
        <>
            <Layout minHeight="100dvh">
                <Flex
                    column
                    align="center"
                    justify="center"
                    height="100%"
                    gap={16}
                >
                    <Image src={MoyeoColorLogo} width="160px" />
                    <Text color="primary">
                        대학생들을 하나로 모아주는, 모여!
                    </Text>
                </Flex>
            </Layout>
            <BottomLayout>
                <Button as="Link" to="/auth/sign-up">
                    접속하기
                </Button>
            </BottomLayout>
        </>
    );
}
