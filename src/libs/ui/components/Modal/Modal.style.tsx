import { styled } from "styled-components";

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
