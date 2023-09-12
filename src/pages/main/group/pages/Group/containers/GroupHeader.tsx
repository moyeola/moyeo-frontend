import { NoticeBell } from "../../../../../../components";
import { Header } from "../../../../../../libs/ui";
import { cv } from "../../../../../../libs/ui/style";
import { useGroup } from "../../../../../../hooks/useGroup";

export function GroupHeader() {
    const { group } = useGroup();

    return (
        <Header bgColor={cv.bgHome}>
            <Header.Left></Header.Left>
            <Header.Title>
                {group?.name || (
                    <span style={{ color: cv.gray04 }}>(그룹 이름 없음)</span>
                )}
            </Header.Title>
            <Header.Right>
                <NoticeBell hasNotice={true} />
            </Header.Right>
        </Header>
    );
}
