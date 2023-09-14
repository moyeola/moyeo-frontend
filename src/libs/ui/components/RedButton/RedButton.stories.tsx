import type { Meta, StoryObj } from "@storybook/react";
import { RedButton } from "..";

const meta: Meta<typeof RedButton> = {
    component: RedButton,
    title: "Components/RedButton",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RedButton>;

export const Primary: Story = {
    args: {
        children: "hello, World!",
        onClick: () => null,
    },
};
