export interface MeetPickerProps {
    dates: string[];
    times: {
        start: string;
        end: string;
    }[];
    setTimes?: (
        times: {
            start: string;
            end: string;
        }[]
    ) => void;
    startTimeAt: string;
    endTimeAt: string;
}
