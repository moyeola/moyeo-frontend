import { Header, Layout } from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";

export function ProfileEdit() {
    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left />
                <Header.Title>프로필 편집</Header.Title>
                <Header.Right />
            </Header>
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
            </Layout>
        </>
    );
}
