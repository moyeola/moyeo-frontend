export interface MeetResultProps {
    dates: string[];
    setTime: (time: { start: string; end: string }) => void;
    time?: {
        start: string;
        end: string;
    };
    responses: {
        times: {
            start: string;
            end: string;
        }[];
    }[];
    startTimeAt: string;
    endTimeAt: string;
}
