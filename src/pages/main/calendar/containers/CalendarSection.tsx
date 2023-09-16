import { Calendar } from "../../../../libs/ui";
import { Flex } from "../../../../libs/ui";

export function CalendarSection() {
    // 일주일 단위로 Calendar.Item을 생성하는 함수
    const generateWeekItems = (start: number, end: number) => {
        const items = [];
        for (let i = start; i <= end; i++) {
            items.push(
                <Calendar.Item
                    key={`2023-09-${i < 10 ? "0" + i : i}`}
                    date={`2023-09-${i < 10 ? "0" + i : i}`}
                    events={[{ title: `Event` }]}
                />
            );
        }
        return items;
    };

    return (
        <>
            <Flex width="400px">
                <Calendar>
                    <Calendar.Week>{generateWeekItems(5, 11)}</Calendar.Week>
                    <Calendar.Week>{generateWeekItems(12, 18)}</Calendar.Week>
                    <Calendar.Week>{generateWeekItems(19, 25)}</Calendar.Week>
                    <Calendar.Week>{generateWeekItems(26, 30)}</Calendar.Week>
                </Calendar>
            </Flex>
        </>
    );
}
