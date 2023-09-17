import { styled } from "styled-components";
import Glass from "./assets/3dicons.png";
import { cv } from "../../style";

const StyledEmptyEntity = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    gap: 8px;
    background-color: ${cv.bgOnboarding};
`;

const StyledEmptyEntityImage = styled.img`
    height: 96px;
`;

const StyledEmptyEntityContent = styled.div`
    text-align: center;
`;

export interface EmptyEntityProps {
    children?: React.ReactNode;
}
export function EmptyEntity({ children }: EmptyEntityProps) {
    return (
        <StyledEmptyEntity>
            <StyledEmptyEntityImage src={Glass} />
            <StyledEmptyEntityContent>{children}</StyledEmptyEntityContent>
        </StyledEmptyEntity>
    );
}
