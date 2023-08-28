import { Meta, StoryObj } from "@storybook/react";

import { TopLayout } from "..";

const meta: Meta<typeof TopLayout> = {
    title: "Components/TopLayout",
    component: TopLayout,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TopLayout>;

export const Primary: Story = {
    args: {
        children: <>TopLayout</>,
    },
};
