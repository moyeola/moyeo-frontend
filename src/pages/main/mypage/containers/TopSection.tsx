import styled from "styled-components";
import { ImageSelect } from "../../../auth/components/imageSelect";
import { cv } from "../../../../libs/ui/style";
import ProfileEditButton from "../components/ProfileEditButton";

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

const Email = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${cv.gray03};
    letter-spacing: -0.36px;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface ProfileTopProps {
    image: File | undefined;
    setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const ProfileTopSection: React.FC<ProfileTopProps> = ({ image, setImage }) => {
    return (
        <ProfileTop>
            <ImageSelect setImage={setImage} image={image} showPenIcon={false}/>
            <ProfileText>
                <NickName>닉네임</NickName>
                <Email>newnya@gmail.com</Email>
            </ProfileText>
            <ProfileEditButton />
        </ProfileTop>
    );
};

export default ProfileTopSection;
