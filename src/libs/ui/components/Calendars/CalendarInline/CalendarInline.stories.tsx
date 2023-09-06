import type { Meta, StoryObj } from "@storybook/react";
import { CalendarInline } from "..";
import { Flex } from "../..";

const meta: Meta<typeof CalendarInline> = {
    component: CalendarInline,
    title: "Components/CalendarInline",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CalendarInline>;

export const Primary: Story = {
    render: (args) => (
        <Flex width="400px">
            <CalendarInline {...args}>
                <CalendarInline.Item
                    date="2023-09-05"
                    events={[
                        { title: "Event 123123123" },
                        { title: "Event 2" },
                        { title: "Event 3" },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-06"
                    events={[
                        { title: "Event 123123123" },
                        { title: "Event 2" },
                        { title: "Event 3" },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-07"
                    events={[
                        { title: "Event 123123123" },
                        { title: "Event 2" },
                        { title: "Event 3" },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-08"
                    events={[
                        { title: "Event 123123123" },
                        { title: "Event 2" },
                        { title: "Event 3" },
                    ]}
                />
                <CalendarInline.Item
                    date="2023-09-09"
                    events={[
                        { title: "Event 123123123" },
                        { title: "Event 2" },
                        { title: "Event 3" },
                    ]}
                />
            </CalendarInline>
        </Flex>
    ),
};
