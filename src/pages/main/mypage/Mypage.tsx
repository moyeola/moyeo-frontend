import { cv } from "../../../libs/ui/style";
import { Header, Layout } from "../../../libs/ui";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import ProfileTopSection from "./containers/TopSection";
import ProfileBottomSection from "./containers/BottomSection";

export function MyPage() {
    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left />
                <Header.Title>마이페이지</Header.Title>
                <Header.Right />
            </Header>
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
                <ProfileTopSection />
                <ProfileBottomSection />
            </Layout>
            <AppNavBar selected="myPage" />
        </>
    );
}
