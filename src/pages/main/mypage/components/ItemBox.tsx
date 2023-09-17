import React from "react";
import styled from "styled-components";
import { cv } from "../../../../libs/ui/style";
import { useNavigate } from "react-router-dom";
import { CaretRight } from "phosphor-react";

const ItemText = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px;
    flex-direction: column;
    justify-content: center;
    color: ${cv.gray03};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.6px;
`;

const ItemBoxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    cursor: pointer; 
`;

const ArrowIcon = styled(CaretRight)`
    margin-left: auto;
    color: ${cv.gray03};
`;

interface ItemBoxProps {
    text: string;
    navigationPath?: string;
    showArrow?: boolean;
}

const ItemBox: React.FC<ItemBoxProps> = ({ text, navigationPath, showArrow }) => {
    const navigate = useNavigate();

    return (
        <ItemBoxContainer onClick={() => navigationPath && navigate(navigationPath)}>
            <ItemText>{text}</ItemText>
            {showArrow && <ArrowIcon size={28} weight="light" />}
        </ItemBoxContainer>
    );
};

export default ItemBox;
