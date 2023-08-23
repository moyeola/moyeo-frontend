import { styled } from 'styled-components';
import { Flex } from '../flex';

type textProps = string;

const NavigateText = styled.h3`
    font-size: 16px;
    font-weight: 500;

    & > span {
        color: ${({ theme }) => theme.color.gray01};
    }
`;

export function NavigateTextButton() {
    return (
        <Flex>
            <NavigateText></NavigateText>
        </Flex>
    );
}
