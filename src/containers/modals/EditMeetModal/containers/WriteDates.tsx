import { useRecoilState } from "recoil";
import { editMeetModalStep } from "../EditMeetModalStep.state";
import { editMeetModalData } from "../EditMeetModalData.state";
import { Flex, Modal } from "../../../../libs/ui";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import styled from "styled-components";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { DateFormatter, DayPicker } from "react-day-picker";
import dayjs from "dayjs";
import { cv } from "../../../../libs/ui/style";

const StyledTitle = styled.div`
    font-size: 18px;
`;

export function WriteDatesContainer() {
    const [, setStep] = useRecoilState(editMeetModalStep);
    const [meet, setMeet] = useRecoilState(editMeetModalData);

    const formatCaption: DateFormatter = (month, options) => {
        return <>{format(month, "yyyy년 MM월", { locale: options?.locale })}</>;
    };

    return (
        <Flex.Column>
            <Flex.Between gap="8px">
                <Modal.CircleButton onClick={() => setStep("name")}>
                    <ArrowLeft weight="bold" />
                </Modal.CircleButton>
                <StyledTitle>기간을 선택해주세요</StyledTitle>

                <Modal.CircleButton
                    disabled={!meet?.dates?.length || meet?.dates?.length === 0}
                    onClick={() => setStep("time")}
                >
                    <ArrowRight weight="bold" />
                </Modal.CircleButton>
            </Flex.Between>
            <Flex.Center>
                <DayPicker
                    mode="multiple"
                    max={14}
                    locale={ko}
                    selected={meet?.dates?.map((date) => dayjs(date).toDate())}
                    onSelect={(days) =>
                        setMeet((prev) => ({
                            ...prev,
                            dates: days?.map((day) =>
                                dayjs(day).format("YYYY-MM-DD")
                            ),
                        }))
                    }
                    modifiersStyles={{
                        selected: {
                            backgroundColor: cv.secondary,
                            color: cv.primary,
                        },
                    }}
                    formatters={{
                        formatCaption,
                    }}
                    ISOWeek
                />
            </Flex.Center>
        </Flex.Column>
    );
}
