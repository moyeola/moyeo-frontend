import { BottomLayout, Button, Container, PageLayout, Spacer, Text } from '../../../components';
import { IntroTitle } from '../components/IntroTitle';

export function SignUpPage() {
    return (
        <>
            <PageLayout>
                <Spacer height={80} />
                <Container gap={70}>
                    <IntroTitle>
                        모여를 이용하기 위해
                        <br />
                        <span>이용약관에 동의</span>해주세요
                    </IntroTitle>
                    <Text>
                        {/* TODO: 이용 약관 제대로 작성 필요 */}
                        "모여! 서비스" 이용 약관 제1장 총칙 제1조(목적) 이 약관은 모여! 서비스(이하
                        15M)가 제공하는 서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및
                        책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다. 제2조(약관의 효력 및
                        변경) 이 약관은 회사가 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
                        공지함으로써 효력을 발생합니다. 회사는 필요한 경우 약관을 변경할 수 있으며,
                        변경된 약관은 전항과 같은 방법으로 공지하거나 통지함으로써 효력을
                        발생합니다. 제2장 서비스 이용계약 제4조(서비스의 이용) 이용자는 회사가 정한
                        방법에 따라 이 약관에 동의하여 회원 가입을 하고 서비스를 이용할 수 있습니다.
                        이용자는 회사에게 본인의 실명, 이메일, 프로필 사진 등을 제공하여야 합니다.
                        제5조(개인정보의 보호 및 사용) 회사는 관련 법령이 정하는 바에 따라 이용자의
                        개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련
                        법령 및 회사의 개인정보처리방침이 적용됩니다. 회사는 서비스 제공 등의
                        목적으로 이용자의 본명, 이메일, 프로필 사진 등 개인정보를 수집 사용할 수
                        있습니다. 회사는 이용자가 본 약관에 동의를 한 경우, 수집한 개인정보를 사전
                        고지한 범위 내에서 사용할 수 있으며, 이용자의 사전 동의 없이는 범위를
                        초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
                    </Text>
                </Container>
            </PageLayout>
            <BottomLayout>
                <Container>
                    <Button
                        as="Link"
                        to="/auth/sign-up/profile"
                    >
                        동의하기
                    </Button>
                </Container>
            </BottomLayout>
        </>
    );
}
