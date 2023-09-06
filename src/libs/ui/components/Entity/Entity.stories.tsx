import type { Meta, StoryObj } from "@storybook/react";
import { Entity, Flex } from "..";

const meta: Meta<typeof Entity> = {
    component: Entity,
    title: "Components/Entity",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Entity>;

export const Primary: Story = {
    args: {
        title: "title",
        subtitle: "subTitle",
        description: "description",
        banner: {
            type: "icon",
            icon: "fire",
        },
    },
    decorators: [
        (Story) => {
            return (
                <Flex width="400px">
                    <Story />
                </Flex>
            );
        },
    ],
};
