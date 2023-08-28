import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "..";

const meta: Meta<typeof Layout> = {
    title: "Components/Layout",
    component: Layout,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
    args: {
        children: <>Layout</>,
    },
};
