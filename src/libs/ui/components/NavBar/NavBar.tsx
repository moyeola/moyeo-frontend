import { styled } from "styled-components";
import { NavBarDestination } from "./NavBarDestination";

const StyledNavBarOuter = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`;

const StyledNavBarInner = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    width: 100%;
    max-width: 500px;
    margin: 0px 18px;
    padding-top: 16px;
    padding-bottom: 16px;
`;

const StyledNavBarContainer = styled.div`
    display: flex;
`;

export interface NavBarProps {
    children?: React.ReactNode;
}
function NavBarContainer({ children }: NavBarProps) {
    return (
        <StyledNavBarOuter>
            <StyledNavBarInner>
                <StyledNavBarContainer>{children}</StyledNavBarContainer>
            </StyledNavBarInner>
        </StyledNavBarOuter>
    );
}

export type { NavBarDestinationProps } from "./NavBarDestination";
export const NavBar = Object.assign(NavBarContainer, {
    Destination: NavBarDestination,
});
