import { Meta, StoryObj } from "@storybook/react";

import { BottomLayout } from "..";

const meta: Meta<typeof BottomLayout> = {
    title: "Components/BottomLayout",
    component: BottomLayout,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BottomLayout>;

export const Primary: Story = {
    args: {
        children: <>BottomLayout</>,
    },
};
