import MoyeoLogo from "../../../../../assets/logo/moyeoColorLogo.png";
import { NoticeBell } from "../../../../../components";
import { Header, Image } from "../../../../../libs/ui";

export function HomeHeader() {
    return (
        <Header bgColor="rgba(248, 248, 250, 0.9)">
            <Header.Left>
                <Image src={MoyeoLogo} alt="Moyeo Logo" height="28px" />
            </Header.Left>
            <Header.Right>
                <NoticeBell hasNotice={true} />
            </Header.Right>
        </Header>
    );
}
