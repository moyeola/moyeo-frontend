import {
    Button,
    Container,
    Flex,
    FooterLayout,
    Image,
    PageLayout,
    Text,
} from "../../components";
import MoyeoColorLogo from "../../assets/logo/moyeoColorLogo.png";

export function IntroPage() {
    return (
        <>
            <PageLayout>
                <Container center>
                    <Flex column align="center" gap={16}>
                        <Image src={MoyeoColorLogo} width="160px" />
                        <Text color="primary">
                            대학생들을 하나로 모아주는, 모여!
                        </Text>
                    </Flex>
                </Container>
            </PageLayout>
            <FooterLayout>
                <Container>
                    <Button>접속하기</Button>
                </Container>
            </FooterLayout>
        </>
    );
}
