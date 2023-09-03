import { forwardRef } from "react";
import {
    StyledSwitch,
    StyledSwitchContainer,
    StyledSwitchContent,
    StyledSwitchLabel,
    StyledSwitchOuterContainer,
} from "./Switch.style";

export type SwitchProps = React.ComponentPropsWithRef<"input"> & {
    label?: React.ReactNode;
    disabled?: boolean;
    width?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    (props, ref) => {
        const {
            children,
            label,
            disabled = false,
            width = "100%",
            ...rest
        } = props;

        return (
            <StyledSwitchOuterContainer $width={width}>
                {label && <StyledSwitchLabel>{label}</StyledSwitchLabel>}
                <StyledSwitchContainer $disabled={disabled}>
                    <StyledSwitch
                        ref={ref}
                        type="checkbox"
                        disabled={disabled}
                        {...rest}
                    />
                    <StyledSwitchContent>{children}</StyledSwitchContent>
                </StyledSwitchContainer>
            </StyledSwitchOuterContainer>
        );
    }
);
