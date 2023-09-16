import { cv } from "../../../libs/ui/style";
import { Header, Layout } from "../../../libs/ui";
import FilterIcon from "./assets/Filter.png";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import { useNavigate } from "react-router-dom";
import { CalendarSection } from "./containers/CalendarSection";

export function CalendarPage() {
    const navigate = useNavigate(); // Call the hook to get the navigate function

    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left></Header.Left>
                <Header.Title>캘린더</Header.Title>
                <Header.Right>
                    <img
                        src={FilterIcon}
                        alt="필터"
                        onClick={() => navigate("./filter")}
                    />
                </Header.Right>
            </Header>
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
                <CalendarSection />
            </Layout>
            <AppNavBar selected="calendar" />
        </>
    );
}
