import { forwardRef } from "react";
import { StyledIconButton } from "./IconButton.style";
import { IconContext } from "@phosphor-icons/react";

export interface IconButtonProps extends React.ComponentPropsWithRef<"button"> {
    size?: number | string;
    children?: React.ReactNode;
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (props, ref) => {
        const { size = 32, children, ...rest } = props;

        return (
            <StyledIconButton ref={ref} $size={size} {...rest}>
                <IconContext.Provider
                    value={{
                        size: 20,
                    }}
                >
                    {children}
                </IconContext.Provider>
            </StyledIconButton>
        );
    }
);
