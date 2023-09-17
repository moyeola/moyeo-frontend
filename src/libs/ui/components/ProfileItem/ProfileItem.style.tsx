import styled from "styled-components";
import { cv } from "../../style";

export const StyledProfileItem = styled.div<{ onClick?: () => void }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    cursor: ${(props) => (props.onClick ? "pointer" : "default")};
    min-width: 52px;
`;

export const StyledProfileItemName = styled.div`
    font-size: 14px;
    color: ${cv.gray04};
`;
