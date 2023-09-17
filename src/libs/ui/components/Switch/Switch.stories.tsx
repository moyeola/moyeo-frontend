import { Meta, StoryObj } from "@storybook/react";

import { Switch } from ".";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
    args: {
        label: "스위치",
        width: "300px",
    },
};
