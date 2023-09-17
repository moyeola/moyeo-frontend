import { styled } from "styled-components";
import { cv } from "../../style";
import { SmallButtonVariant } from ".";

export const buttonStyleByType: Record<
    SmallButtonVariant,
    {
        abled: string;
        disabled: string;
    }
> = {
    red: {
        abled: `
            background-color: ${cv.delete1};
            color: ${cv.gray07};
        `,
        disabled: `
            background-color: ${cv.statusInactive};
            color: ${cv.gray07};
    
            &:hover {
                background-color: ${cv.statusInactive};
            }
        `,
    },
    primary: {
        abled: `
            background-color: ${cv.primary};
            color: ${cv.gray07};
        `,
        disabled: `
            background-color: ${cv.statusInactive};
            color: ${cv.gray01};
    
            &:hover {
                background-color: ${cv.statusInactive};
            }
        `,
    },
    secondary: {
        abled: `
            background-color: ${cv.markerBaseBlue};
            color: ${cv.gray04};
        `,
        disabled: `
            background-color: ${cv.statusInactive};
            color: ${cv.gray07};
        
            &:hover {
                background-color: ${cv.statusInactive};
            }
        `,
    },
};

export const StyledSmallButton = styled.button<{
    disabled: boolean;
    $variant: SmallButtonVariant;
}>`
    ${({ disabled, $variant }) =>
        buttonStyleByType[$variant][disabled ? "disabled" : "abled"]}
    border: none;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    height: 40px;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: 150ms;
`;
