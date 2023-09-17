import React from "react";
import {
    StyledModalContainer,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalInput,
    ModalCircleButton,
    ModalButton,
} from "./Modal.style";

export type ModalProps = React.ComponentPropsWithRef<"div"> & {
    width?: string;
};

const ModalContainer = React.forwardRef<HTMLDivElement, ModalProps>(
    (props, ref) => {
        const { children, width = "100%", ...otherProps } = props;

        return (
            <StyledModalContainer ref={ref} $width={width} {...otherProps}>
                {children}
            </StyledModalContainer>
        );
    }
);

ModalContainer.displayName = "Modal";

export { ModalHeader, ModalBody, ModalFooter };
export const Modal = Object.assign(ModalContainer, {
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
    Input: ModalInput,
    CircleButton: ModalCircleButton,
    Button: ModalButton,
});
