import { cv } from "../../../libs/ui/style";
import { Header } from "../../../libs/ui";
import { NoticeBell } from "../../../components";


export function CalendarPage() {
    return (
        <Header bgColor={cv.bgHome}>
            <Header.Left></Header.Left>
            <Header.Title>캘린더</Header.Title>
            <Header.Right>
                <NoticeBell hasNotice={true} />
            </Header.Right>
        </Header>
    );
}
