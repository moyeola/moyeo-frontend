import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "..";
import { Flex } from "../..";

const meta: Meta<typeof Calendar> = {
    component: Calendar,
    title: "Components/Calendar",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
    render: (args) => (
        <Flex width="400px">
            <Calendar {...args}>
                <Calendar.Week>
                    <Calendar.Item
                        date="2023-09-05"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-06"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-07"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-08"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-09"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-10"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-11"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                </Calendar.Week>
                <Calendar.Week>
                    <Calendar.Item
                        date="2023-09-05"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-06"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-07"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-08"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-09"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-10"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-11"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                </Calendar.Week>
                <Calendar.Week>
                    <Calendar.Item
                        date="2023-09-05"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-06"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-07"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-08"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-09"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-10"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                    <Calendar.Item
                        date="2023-09-11"
                        events={[
                            { title: "Event 123123123" },
                            { title: "Event 2" },
                            { title: "Event 3" },
                        ]}
                    />
                </Calendar.Week>
            </Calendar>
        </Flex>
    ),
};
