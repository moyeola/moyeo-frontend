import styled from "styled-components";
import { cv } from "../../../../libs/ui/style";
import ProfileEditButton from "../components/ProfileEditButton";
import { useUser } from "../../../../hooks/useUser";
import { Image } from "../../../../libs/ui";

const ProfileTop = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
    flex-direction: column;
`;

const NickName = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${cv.gray03};
    letter-spacing: -0.8px;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface ProfileTopProps {}

const ProfileTopSection: React.FC<ProfileTopProps> = () => {
    const { user } = useUser();

    return (
        <ProfileTop>
            {/* <ImageSelect
                setImage={setImage}
                image={image}
                showPenIcon={false}
            /> */}
            <Image src={user?.profileImageUrl} width="128px" height="128px" />
            <ProfileText>
                <NickName>{user?.name}</NickName>
                {/* <Email>{user.}</Email> */}
            </ProfileText>
            <ProfileEditButton />
        </ProfileTop>
    );
};

export default ProfileTopSection;
