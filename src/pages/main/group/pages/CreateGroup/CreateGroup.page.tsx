import { CaretLeft } from "@phosphor-icons/react";
import {
    BottomLayout,
    Button,
    Flex,
    Header,
    IconButton,
    Layout,
    TextField,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";

export function CreateGroupPage() {
    const navigate = useNavigate();

    const createGroup = () => {
        navigate("/main/groups");
    };

    return (
        <>
            <Header bgColor={cv.bgOnboarding}>
                <Header.Left>
                    <IconButton onClick={() => navigate(-1)}>
                        <CaretLeft />
                    </IconButton>
                </Header.Left>
                <Header.Title>그룹 생성</Header.Title>
                <Header.Right></Header.Right>
            </Header>
            <Layout bgColor={cv.bgOnboarding}>
                <Flex.Column gap="20px">
                    <TextField
                        label="그룹 명"
                        placeholder="그룹 명을 입력해주세요"
                        maxLength={10}
                    />
                    <TextField
                        label="팀 소개"
                        placeholder="팀 소개를 입력해주세요"
                        maxLength={20}
                    />
                </Flex.Column>
            </Layout>
            <BottomLayout>
                <Button onClick={() => createGroup()}>그룹 생성하기</Button>
            </BottomLayout>
        </>
    );
}
