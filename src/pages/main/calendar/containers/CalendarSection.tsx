import { useRecoilValue } from "recoil";
import { AllCalendar } from "../../../../containers/AllCalendar/AllCalendar";
import { calendarFilterAtom } from "../state/calendarFilter.state";

export function CalendarSection() {
    const calendarFilter = useRecoilValue(calendarFilterAtom);

    return (
        <>
            <AllCalendar calendarFilter={calendarFilter} />
        </>
    );
}
