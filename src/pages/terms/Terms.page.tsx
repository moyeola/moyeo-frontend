import styled from "styled-components";
import { Header, Layout, Text } from "../../libs/ui";
import { cv } from "../../libs/ui/style";

const TermTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: ${cv.gray01};
    margin-bottom: 20px;
`;

const TermParagraph = styled.div`
    margin-bottom: 20px; // 여백 조절은 필요에 따라 값을 조정하세요.
`;

const SubTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${cv.gray01};
`;

export function TermsofService() {
    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left></Header.Left>
                <Header.Title>이용약관</Header.Title>
                <Header.Right />
            </Header>
            <Layout paddingTop="100px">
                <TermTitle>모여! 서비스 이용 약관</TermTitle>
                <TermParagraph>
                    <SubTitle>제1장 총칙</SubTitle>
                </TermParagraph>
                <TermParagraph>
                    <Text>
                        제1조(목적) 이 약관은 모여! 서비스(이하 15M)가 제공하는
                        서비스의 이용과 관련하여 회사와 이용자와의 권리, 의무 및
                        책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </Text>
                </TermParagraph>
                <TermParagraph>
                    <SubTitle>제2조(약관의 효력 및 변경)</SubTitle>
                    <Text>
                        이 약관은 회사가 서비스 화면에 게시하거나 기타의
                        방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                    </Text>
                    <Text>
                        회사는 필요한 경우 약관을 변경할 수 있으며, 변경된
                        약관은 전항과 같은 방법으로 공지하거나 통지함으로써
                        효력을 발생합니다.
                    </Text>
                </TermParagraph>
                <TermParagraph>
                    <SubTitle>제2장 서비스 이용계약</SubTitle>
                </TermParagraph>
                <TermParagraph>
                    <SubTitle>제4조(서비스의 이용)</SubTitle>
                    <Text>
                        이용자는 회사가 정한 방법에 따라 이 약관에 동의하여 회원
                        가입을 하고 서비스를 이용할 수 있습니다.
                    </Text>
                    <Text>
                        이용자는 회사에게 본인의 실명, 이메일, 프로필 사진 등을
                        제공하여야 합니다.
                    </Text>
                </TermParagraph>
                <TermParagraph>
                    <SubTitle>제5조(개인정보의 보호 및 사용)</SubTitle>
                    <Text>
                        회사는 관련 법령이 정하는 바에 따라 이용자의 개인정보를
                        보호하기 위해 노력합니다. 개인정보의 보호 및 사용에
                        대해서는 관련 법령 및 회사의 개인정보처리방침이
                        적용됩니다.
                    </Text>
                    <Text>
                        회사는 서비스 제공 등의 목적으로 이용자의 본명, 이메일,
                        프로필 사진 등 개인정보를 수집 사용할 수 있습니다.
                    </Text>
                    <Text>
                        회사는 이용자가 본 약관에 동의를 한 경우, 수집한
                        개인정보를 사전 고지한 범위 내에서 사용할 수 있으며,
                        이용자의 사전 동의 없이는 범위를 초과하여 이용하거나
                        원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다.
                    </Text>
                </TermParagraph>
            </Layout>
        </>
    );
}
