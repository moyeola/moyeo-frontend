import { styled } from "styled-components";
import { cv } from "../../style";

export type StyledModalContainer = {
    $width?: string;
};
export const StyledModalContainer = styled.div<StyledModalContainer>`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: ${(props) => props.$width};
    padding: 8px;
`;

export const ModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: medium;
`;
ModalHeader.displayName = "Modal.Header";

export const ModalBody = styled.div`
    font-size: 15px;
`;
ModalBody.displayName = "Modal.Content";

export const ModalFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;
`;
ModalFooter.displayName = "Modal.Footer";

export const ModalInput = styled.input`
    height: 40px;
    border: 0;
    outline: 0;
    font-size: 18px;

    &::placeholder {
        color: ${cv.statusInactive};
    }
`;

ModalInput.displayName = "Modal.Input";

export const ModalCircleButton = styled.button`
    min-width: 32px;
    height: 32px;
    padding: 4px;
    border: 0px;
    outline: 0px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${cv.gray07};
    background-color: ${cv.primary};
    transition: 150ms;
    cursor: pointer;
    color: ${cv.gray07};
    gap: 4px;
    transition: 150ms;
    font-size: 18px;

    &:disabled {
        background-color: ${cv.statusInactive};
        cursor: not-allowed;
    }
`;

ModalCircleButton.displayName = "Modal.CircleButton";

export const ModalButton = styled.button`
    height: 40px;
    padding: 4px 8px;
    border: 0px;
    outline: 0px;
    display: flex;
    align-items: center;
    background-color: ${cv.gray07};
    transition: 150ms;

    &:active {
        background-color: ${cv.gray06};
    }
`;

ModalButton.displayName = "Modal.Button";
