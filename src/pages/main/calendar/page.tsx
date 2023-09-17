import { cv } from "../../../libs/ui/style";
import { Header, IconButton, Layout } from "../../../libs/ui";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
import { useNavigate } from "react-router-dom";
import { CalendarSection } from "./containers/CalendarSection";
import { Funnel } from "@phosphor-icons/react";

export function CalendarPage() {
    const navigate = useNavigate(); // Call the hook to get the navigate function

    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left></Header.Left>
                <Header.Title>캘린더</Header.Title>
                <Header.Right>
                    <IconButton
                        onClick={() => navigate("/main/calendar/filter")}
                    >
                        <Funnel />
                    </IconButton>
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
