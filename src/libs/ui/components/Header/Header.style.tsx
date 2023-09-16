import { styled } from "styled-components";

export const StyledHeader = styled.header`
    height: 46px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding-bottom: 12px;
`;

export const StyledHeaderTitle = styled.div``;

export const StyledHeaderLeft = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 12px;
`;

export const StyledHeaderRight = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 12px;
`;
