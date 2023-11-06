import { styled } from "styled-components";
import { cv } from "../../style";
import { IconContext } from "@phosphor-icons/react";

interface StyledContainerProps {
    selected: boolean;
}
const StyledContainer = styled.div<StyledContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 4px;
    color: ${(props) =>
        props.selected ? cv.statusActiveBlack : cv.statusInactive};
`;

const StyledIcon = styled.div`
    width: 24px;
    height: 24px;
`;

export interface NavBarDestinationProps {
    /**
     * NavBar에 사용되는 아이콘입니다, 사이즈를 24x24로 맞춰주세요.
     */
    icon: React.ReactNode;
    label: string;
    selected?: boolean;
    onClick?: () => void;
}
export function NavBarDestination({
    icon,
    selected = false,
    onClick,
}: NavBarDestinationProps) {
    return (
        <StyledContainer
            selected={selected}
            onClick={() => onClick && onClick()}
        >
            <IconContext.Provider
                value={{
                    color: selected ? cv.statusActiveBlack : cv.statusInactive,
                    size: "24px",
                    weight: "fill",
                }}
            >
                <StyledIcon>{icon}</StyledIcon>
            </IconContext.Provider>
        </StyledContainer>
    );
}
