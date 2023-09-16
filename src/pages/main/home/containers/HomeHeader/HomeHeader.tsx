import { useNavigate } from "react-router-dom";
import MoyeoLogo from "../../../../../assets/logo/moyeoColorLogo.png";
import { NoticeBell } from "../../../../../components";
import { Header, IconButton, Image } from "../../../../../libs/ui";

export function HomeHeader() {
    const navigate = useNavigate();

    return (
        <Header bgColor="rgba(248, 248, 250, 0.9)">
            <Header.Left>
                <Image src={MoyeoLogo} alt="Moyeo Logo" height="28px" />
            </Header.Left>
            <Header.Right>
                <IconButton onClick={() => navigate("/main/notification")}>
                    <NoticeBell hasNotice={true} />
                </IconButton>
            </Header.Right>
        </Header>
    );
}
