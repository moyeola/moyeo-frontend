import { forwardRef } from "react";
import {
    StyledHeader,
    StyledHeaderLeft,
    StyledHeaderRight,
    StyledHeaderTitle,
} from "./Header.style";
import { TopLayout } from "..";
import { cv } from "../../style";

export interface HeaderProps extends React.ComponentPropsWithRef<"header"> {
    children?: React.ReactNode;
    bgColor?: string;
}
const HeaderComponent = forwardRef<HTMLDivElement, HeaderProps>(
    ({ children, bgColor = cv.bgOnboarding, ...props }, ref) => {
        return (
            <TopLayout bgColor={bgColor} paddingBottom="12px" paddingTop="12px">
                <StyledHeader ref={ref} {...props}>
                    {children}
                </StyledHeader>
            </TopLayout>
        );
    }
);
HeaderComponent.displayName = "Header";

export const Header = Object.assign(HeaderComponent, {
    Left: StyledHeaderLeft,
    Title: StyledHeaderTitle,
    Right: StyledHeaderRight,
});
