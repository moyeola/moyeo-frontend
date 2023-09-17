import type { Meta, StoryObj } from "@storybook/react";
import { SmallButton } from "..";

const meta: Meta<typeof SmallButton> = {
    component: SmallButton,
    title: "Components/SmallButton",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SmallButton>;

export const Primary: Story = {
    args: {
        children: "hello, World!",
        onClick: () => null,
    },
};
