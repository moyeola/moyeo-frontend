import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { RuleSet, css, styled } from 'styled-components';

type ButtonType = 'primary' | 'secondary';

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    type?: ButtonType;
    as?: 'a' | 'Link';
    to?: string;
    disabled?: boolean;
}

const buttonStyleByType: {
    [key in ButtonType]: {
        abled: RuleSet<object>;
        disabled: RuleSet<object>;
    };
} = {
    primary: {
        abled: css`
            background-color: ${({ theme }) => theme.color.primary};
            color: ${({ theme }) => theme.color.gray07};
        `,
        disabled: css`
            background-color: ${({ theme }) => theme.color.statusInactive};
            color: ${({ theme }) => theme.color.gray07};
        `,
    },
    secondary: {
        abled: css`
            background-color: ${({ theme }) => theme.color.secondary};
            color: ${({ theme }) => theme.color.gray07};
        `,
        disabled: css`
            background-color: ${({ theme }) => theme.color.statusInactive};
            color: ${({ theme }) => theme.color.gray07};
        `,
    },
};

const StyledButton = styled.button<{ type: ButtonType; disabled: boolean }>`
    ${({ type, disabled }) => buttonStyleByType[type || 'primary'][disabled ? 'disabled' : 'abled']}
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export function Button({
    children,
    onClick,
    type = 'primary',
    disabled = false,
    as,
    to,
}: ButtonProps) {
    if (as === 'a')
        return (
            <StyledButton
                as="a"
                type={type}
                href={to}
                disabled={disabled}
            >
                {children}
            </StyledButton>
        );

    if (as === 'Link') {
        return (
            <StyledButton
                as={Link}
                type={type}
                to={to || '/'}
                disabled={disabled}
            >
                {children}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}
