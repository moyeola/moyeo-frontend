import { styled } from 'styled-components';
import { Image } from '../../../components';
import NotificationLogo from '../assets/Notification.png';

export function Notification() {
    return (
        <>
            <Image src={NotificationLogo} width="35px" />
        </>
    );
}

// const Notification = styled.button`
//   border:none
// `;
