import { Meta, StoryObj } from "@storybook/react";

import { MeetPicker } from ".";
import { useState } from "react";
import { MeetPickerProps } from "./MeetPicker.type";
import { Flex } from "..";

const meta: Meta<typeof MeetPicker> = {
    title: "Components/MeetPicker",
    component: MeetPicker,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof MeetPicker>;

const MeetPickerTemplate = (args: MeetPickerProps) => {
    const [times, setTimes] = useState<
        {
            start: string;
            end: string;
        }[]
    >([]);

    return (
        <Flex.Column width="350px">
            <MeetPicker {...args} times={times} setTimes={setTimes} />
        </Flex.Column>
    );
};

export const Primary: Story = {
    render: MeetPickerTemplate,
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
    },
};
