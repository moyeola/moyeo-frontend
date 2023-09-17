import styled from "styled-components";
import { cv } from "../../../libs/ui/style";

const StyledGoogleLoginButton = styled.button<{ $isLoading: boolean }>`
    width: 100%;
    height: 56px;
    background-color: ${(props) => (props.$isLoading ? cv.gray05 : cv.primary)};
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    gap: 8px;
    padding: 4px;
    transition: 200ms;
    border-radius: 12px;
    color: ${cv.gray07};
`;

const Icon = styled.div`
    width: 48px;
    height: 48px;
    min-width: 48px;
    background-color: ${cv.gray07};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.div`
    width: 100%;
`;

export function GoogleLoginButton({
    onClick,
    children,
    isLoading = false,
}: {
    onClick: (e: React.MouseEvent) => void;
    children: React.ReactNode;
    isLoading?: boolean;
}) {
    return (
        <StyledGoogleLoginButton onClick={onClick} $isLoading={isLoading}>
            <Icon>
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path
                            fill="#4285F4"
                            d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                        />
                        <path
                            fill="#34A853"
                            d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                        />
                        <path
                            fill="#EA4335"
                            d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                        />
                    </g>
                </svg>
            </Icon>
            <ButtonText>{children}</ButtonText>
        </StyledGoogleLoginButton>
    );
}
