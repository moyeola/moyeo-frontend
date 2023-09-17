import styled from "styled-components";
import { cv } from "../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";

const ProfileEditBtnStyled = styled.button`
    display: flex;
    width: 333px;
    height: 42px;
    padding: 14px 15px 14px 9px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    color: ${cv.gray04};
    border: 1px solid ${cv.gray04};
    cursor: pointer;
`;

const ProfileEditButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <ProfileEditBtnStyled onClick={() => navigate("edit")}>
            프로필 편집
        </ProfileEditBtnStyled>
    );
};

export default ProfileEditButton;