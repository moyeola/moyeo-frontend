import { Image, Flex } from '../../../../components';
import { HeaderContainer } from './HeaderContainer';
import { Notification } from './Notification';
import MoyeoColorLogo from '../../../../assets/logo/moyeoColorLogo.png';

export function Header() {
    return (
        <HeaderContainer>
            <Flex
                justify="space-between"
                align="center"
                alignContent="center"
                style={{ height: '100%' }}
            >
                <Image src={MoyeoColorLogo} width="55px" />
                <Notification />
                {/** 아직 알림과 관련된 페이지 디자인이 완료되지 않았으므로 
                  Notification 컴포넌트로 분리만 해놓았습니다. */}
            </Flex>
        </HeaderContainer>
    );
}
