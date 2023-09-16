import { Meta, StoryObj } from "@storybook/react";

import { MeetResult } from ".";
import { useState } from "react";
import { MeetResultProps } from "./MeetResult.type";
import { Flex } from "..";

const meta: Meta<typeof MeetResult> = {
    title: "Components/MeetResult",
    component: MeetResult,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof MeetResult>;

const MeetResultTemplate = (args: MeetResultProps) => {
    const [time, setTime] = useState<{
        start: string;
        end: string;
    }>();

    return (
        <Flex.Column width="350px">
            <MeetResult {...args} time={time} setTime={setTime} />
        </Flex.Column>
    );
};

export const Primary: Story = {
    render: MeetResultTemplate,
    args: {
        dates: [
            "2021-08-01",
            "2021-08-02",
            "2021-08-03",
            "2021-08-04",
            "2021-08-05",
            "2021-08-06",
            "2021-08-07",
            "2021-08-08",
            "2021-08-09",
            "2021-08-10",
        ],
        startTimeAt: "09:00",
        endTimeAt: "15:00",
        responses: [
            {
                times: [
                    {
                        start: "2021-08-01T09:00:00",
                        end: "2021-08-01T09:30:00",
                    },
                ],
            },
        ],
    },
};
