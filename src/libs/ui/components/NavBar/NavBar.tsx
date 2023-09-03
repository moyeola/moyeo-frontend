import { styled } from "styled-components";
import { BottomLayout } from "..";
import { NavBarDestination } from "./NavBarDestination";

const StyledNavBarContainer = styled.div`
    display: flex;
`;

export interface NavBarProps {
    children?: React.ReactNode;
}
function NavBarContainer({ children }: NavBarProps) {
    return (
        <BottomLayout bgColor="#ffffff">
            <StyledNavBarContainer>{children}</StyledNavBarContainer>
        </BottomLayout>
    );
}

export type { NavBarDestinationProps } from "./NavBarDestination";
export const NavBar = Object.assign(NavBarContainer, {
    Destination: NavBarDestination,
});
