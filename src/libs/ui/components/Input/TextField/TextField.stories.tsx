import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "..";

const meta: Meta<typeof TextField> = {
    title: "Components/TextField",
    component: TextField,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {};
