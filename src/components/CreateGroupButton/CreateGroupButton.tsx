import { styled } from "styled-components";
import { cv } from "../../libs/ui/style";

const StyledButton = styled.button`
    width: 100%;
    background-color: transparent;
    border: 1px solid ${cv.gray04};
    border-radius: 999px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    color: ${cv.gray03};

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export interface CreateGroupButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}
export function CreateGroupButton({
    children,
    onClick,
}: CreateGroupButtonProps) {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
