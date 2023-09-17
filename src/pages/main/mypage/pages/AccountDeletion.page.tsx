import { Header, IconButton, Layout, Button, BottomLayout } from "../../../../libs/ui";
import { cv } from "../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";


interface ConsentTextProps {
    checked: boolean;
}

const ConsentText = styled.div<ConsentTextProps>`
    color: ${props => props.checked ? 'orange' : `${cv.gray03}`};
    font-size: 14px;
    cursor: pointer;
    user-select: none;  // 텍스트 드래그 방지
`;

const TextContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${cv.gray01};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 21.6px */
`

const SubText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${cv.gray03};
    font-size: 14x;
`

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;  // CheckBox와 기존 텍스트와의 간격
    margin-bottom: 20px;  // CheckBox와 하단 버튼과의 간격
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid ${cv.gray03};
    border-radius: 50%;  // 동그란 모양
    background-color: transparent;
    cursor: pointer;
    position: relative;
    outline: none;

    &:checked {
        background-color: ${cv.primary};  // 체크되었을 때의 배경색
        border-color: ${cv.primary};  // 체크되었을 때의 border 색상
    }

    &:checked::after {
        content: '';  // 체크 표시
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white; 
    }
`;


export function Deletion() {
    const navigate = useNavigate();
    const [isChecked, setChecked] = useState(false);

    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left/>
                <Header.Title>계정탈퇴</Header.Title>
                <Header.Right>
                    <IconButton onClick={() => navigate("/main/mypage")}>
                        취소
                    </IconButton>
                </Header.Right>
            </Header>
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100dvh"
            >
                <TextContainer>
                    <MainText>모여를 떠나실건가요?</MainText>
                    <SubText>탈퇴하는 즉시 데이터가 제거되며, 복구가 불가능합니다.</SubText>
                </TextContainer>
                <BottomLayout>
                    <CheckBoxContainer>
                        <CustomCheckbox checked={isChecked} onChange={() => setChecked(!isChecked)} />
                        <ConsentText checked={isChecked} onClick={() => setChecked(!isChecked)}>
                            안내사항을 확인하였으며 이에 동의합니다.
                        </ConsentText>
                    </CheckBoxContainer>
                    <Button 
                        type="submit"
                        disabled={!isChecked}>
                        탈퇴하기
                    </Button>
                </BottomLayout>
            </Layout>
        </>
    );
}