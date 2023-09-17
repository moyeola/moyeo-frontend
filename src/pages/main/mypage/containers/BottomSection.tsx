import React from "react";
import styled from "styled-components";
import ItemBox from "../components/ItemBox";
import { cv } from "../../../../libs/ui/style";

const ProfileBottomContainer = styled.div`
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
    align-items: center;
    gap: 45px;
    margin-top: 60px;
`;

const ProfileBottomTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${cv.gray03};
    letter-spacing: -0.7px;
`;

const BottomBox = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

const ProfileBottomSection: React.FC = () => {
    return (
        <ProfileBottomContainer>
            <BottomBox>
                <ProfileBottomTitle>계정관리</ProfileBottomTitle>
                <ItemBox
                    text="로그아웃"
                    showArrow={false}
                    navigationPath="/intro"
                />
                <ItemBox
                    text="계정탈퇴"
                    showArrow={true}
                    navigationPath="delete"
                />
            </BottomBox>
            <BottomBox>
                <ProfileBottomTitle>서비스 정보</ProfileBottomTitle>
                <ItemBox
                    text="이용약관"
                    showArrow={true}
                    navigationPath="TermsofService"
                />
            </BottomBox>
        </ProfileBottomContainer>
    );
};

export default ProfileBottomSection;
