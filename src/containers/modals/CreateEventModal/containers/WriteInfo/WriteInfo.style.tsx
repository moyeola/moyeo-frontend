import { styled } from "styled-components";
import { cv } from "../../../../../libs/ui/style";

export const StyledInput = styled.input`
    height: 40px;
    border: 0;
    outline: 0;
    font-size: 18px;

    &::placeholder {
        color: ${cv.statusInactive};
    }
`;

export const IconButton = styled.button`
    min-width: 32px;
    height: 32px;
    padding: 4px;
    border: 0px;
    outline: 0px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cv.bgOnboarding};
    transition: 150ms;
    cursor: pointer;
    color: ${cv.gray04};
    gap: 4px;

    &:focus {
        background-color: ${cv.markerBaseBlue};
    }

    &:hover {
        background-color: ${cv.markerBaseBlue};
    }
`;

export const DateInput = styled.input`
    height: 32px;
    border: 0;
    outline: 0;
    font-size: 16px;

    &::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

export const DateInputLabel = styled.div`
    font-size: 14px;
    color: ${cv.gray04};
`;

interface DateModeButtonProps {
    $selected?: boolean;
}
export const ModeButton = styled.button<DateModeButtonProps>`
    font-size: 14px;
    padding: 4px 12px;
    border: 0;
    outline: 0;
    background-color: ${(props) => (props.$selected ? cv.gray03 : cv.gray06)};
    color: ${(props) => (props.$selected ? cv.gray07 : cv.gray03)};
    border-radius: 999px;
`;

export const LocationInput = styled.input`
    height: 50px;
    padding: 0px 16px;
    font-size: 14px;
    background-color: ${cv.markerBaseBlue};
    border-radius: 10px;
    border: 0;
    outline: 0;

    &::placeholder {
        color: ${cv.statusInactive};
    }
`;
