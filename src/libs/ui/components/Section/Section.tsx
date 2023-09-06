import { StyledSection } from "./Section.style";

export interface SectionProps {
    children?: React.ReactNode;
}

export function SectionComponent({ children }: SectionProps) {
    return <StyledSection>{children}</StyledSection>;
}
