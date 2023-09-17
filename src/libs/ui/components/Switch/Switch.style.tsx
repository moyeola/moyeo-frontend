import { styled } from "styled-components";
import { cv } from "../../style";

export interface StyledSwitchOuterContainerProps {
    $width: string;
}
export const StyledSwitchOuterContainer = styled.div<StyledSwitchOuterContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.$width};
    gap: 6px;
`;

export const StyledSwitchLabel = styled.div`
    color: ${cv.gray01};
    font-size: 16px;
`;

export type StyledSwitchContainerProps = {
    $disabled: boolean;
};
export const StyledSwitchContainer = styled.div<StyledSwitchContainerProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: ${(props) => (props.$disabled ? "#e9e9ea" : cv.gray01)};
`;

export const StyledSwitch = styled.input`
    appearance: none;

    width: 44px;
    height: 26px;
    border: none;
    border-radius: 20px;
    background-color: #e9e9ea;
    transition: 250ms;

    display: flex;
    align-items: center;
    position: relative;

    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }

    &::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 18px;
        height: 18px;
        border-radius: 20px;
        background-color: #ffffff;
        transition: 250ms;
    }

    @keyframes CircleAnimation {
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(1.3);
        }
        100% {
            transform: scaleX(1);
        }
    }

    &:checked {
        background-color: ${cv.primary};

        &::after {
            left: 22px;
            animation: CircleAnimation 250ms cubic-bezier(0, 0, 0.16, 0.99)
                forwards;
        }
    }
`;

export const StyledSwitchContent = styled.div``;
