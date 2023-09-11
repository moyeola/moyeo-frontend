import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import { Flex, Layout } from "../../../libs/ui";
import { cv } from "../../../libs/ui/style";
import { CalendarSection } from "./containers/CalendarSection/CalendarSection";
import { GroupSection } from "./containers/GroupSection/GroupSection";
import { HomeHeader } from "./containers/HomeHeader/HomeHeader";

export function HomePage() {
    return (
        <>
            <HomeHeader />
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
                <Flex.Column gap="32px">
                    <CalendarSection />
                    <GroupSection />
                </Flex.Column>
            </Layout>
            <AppNavBar selected="home" />
        </>
    );
}
