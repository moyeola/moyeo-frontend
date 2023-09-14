import { cv } from "../../../libs/ui/style";
import { Header } from "../../../libs/ui";
import FilterIcon from "./assets/Filter.png";
import { AppNavBar } from "../../../containers/AppNavBar/AppNavBar";
export function CalendarPage() {
    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left></Header.Left>
                <Header.Title>캘린더</Header.Title>
                <Header.Right>
                    <img src={FilterIcon} alt="필터" />
                </Header.Right>
            </Header>
            <AppNavBar selected="calendar" />
        </>
        
    );
}
