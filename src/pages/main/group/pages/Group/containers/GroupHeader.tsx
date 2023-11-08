// import { NoticeBell } from "../../../../../../components";
import { Header, IconButton } from "../../../../../../libs/ui";
import { cv } from "../../../../../../libs/ui/style";
import { useGroup } from "../../../../../../hooks/useGroup";
import { CaretLeft, PencilSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function GroupHeader() {
    const { group } = useGroup();
    const navigate = useNavigate();

    return (
        <Header bgColor={cv.bgHome}>
            <Header.Left>
                <IconButton onClick={() => navigate("/main/groups")}>
                    <CaretLeft weight="bold" />
                </IconButton>
            </Header.Left>
            <Header.Title>
                {group?.name || (
                    <span style={{ color: cv.gray04 }}>(그룹 이름 없음)</span>
                )}
            </Header.Title>
            <Header.Right>
                <IconButton
                    onClick={() => navigate(`/main/groups/${group?.id}/edit`)}
                >
                    <PencilSimple />
                </IconButton>
                {/* <IconButton>
                    <NoticeBell hasNotice={true} />
                </IconButton> */}
            </Header.Right>
        </Header>
    );
}
