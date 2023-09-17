import { useRecoilState } from "recoil";
import { updateEventWriteInfoModeAtom } from "./WriteInfoMode.state";
import { WriteTitleContainer } from "./WriteTitle/WriteTitle";
import { useEffect } from "react";
import { WriteDateContainer } from "./WriteDate/WriteDate";
import { WriteNoticeContainer } from "./WriteNotice/WriteNotice";
import { WriteLocationContainer } from "./WriteLocation/WriteLocation";

export function WriteInfoContainer() {
    const [mode, setMode] = useRecoilState(updateEventWriteInfoModeAtom);

    useEffect(() => {
        setMode("title");
    }, [setMode]);

    switch (mode) {
        case "title":
            return <WriteTitleContainer />;
        case "date":
            return <WriteDateContainer />;
        case "notice":
            return <WriteNoticeContainer />;
        case "location":
            return <WriteLocationContainer />;
        default:
            break;
    }
}
