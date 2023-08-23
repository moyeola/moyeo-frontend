import { Container, Flex } from '../../../../components';
import { TitleLabel } from '../../../../components/text/titleLabel';

export function WeeklyCalendar() {
    return (
        <>
            <Flex>
                <TitleLabel>캘린더</TitleLabel>
                {/* <NavigateTextButton>캘린더 이동하기</NavigateTextButton> */}
            </Flex>
        </>
    );
}
