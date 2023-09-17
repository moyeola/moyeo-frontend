import { CaretRight } from "@phosphor-icons/react";
import { Flex } from "../..";
import {
    StyledSectionHeader,
    StyledSectionHeaderDescription,
    StyledSectionHeaderMoveButton,
    StyledSectionHeaderTitle,
} from "./SectionHeader.style";
import { cv } from "../../../style";

export interface SectionHeaderProps {
    title: string;
    description?: string;

    moveButton?: {
        text: React.ReactNode;
        onClick?: () => void;
    };
}

export function SectionHeader({
    title,
    description,
    moveButton,
}: SectionHeaderProps) {
    return (
        <StyledSectionHeader>
            <Flex.Column>
                <StyledSectionHeaderTitle>{title}</StyledSectionHeaderTitle>
                {description && (
                    <StyledSectionHeaderDescription>
                        {description}
                    </StyledSectionHeaderDescription>
                )}
            </Flex.Column>
            {moveButton && (
                <Flex.Column>
                    <StyledSectionHeaderMoveButton onClick={moveButton.onClick}>
                        {moveButton.text}
                        <CaretRight color={cv.gray01} size={12} />
                    </StyledSectionHeaderMoveButton>
                </Flex.Column>
            )}
        </StyledSectionHeader>
    );
}
