import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "..";
import { CaretLeft } from "@phosphor-icons/react";

const meta: Meta<typeof IconButton> = {
    component: IconButton,
    title: "Components/IconButton",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
    args: {
        children: <CaretLeft />,
        onClick: () => null,
    },
};
