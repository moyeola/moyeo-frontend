import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Components/Button",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "hello, World!",
        onClick: () => null,
    },
};
