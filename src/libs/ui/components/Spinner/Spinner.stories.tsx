import { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "..";

const meta: Meta<typeof Spinner> = {
    title: "Components/Spinner",
    component: Spinner,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: {
                type: "select",
                options: ["small", "medium", "large"],
            },
        },
        color: {
            control: {
                type: "color",
            },
        },
        weight: {
            control: {
                type: "number",
            },
        },
    },
    args: {
        weight: 4,
        size: 32,
    },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
