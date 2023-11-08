// import { NoticeBell } from "../../../../components";
import { Header } from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";

export function GroupsHeader() {
    return (
        <Header bgColor={cv.bgHome}>
            <Header.Left></Header.Left>
            <Header.Title>그룹</Header.Title>
            <Header.Right>{/* <NoticeBell hasNotice={true} /> */}</Header.Right>
        </Header>
    );
}
