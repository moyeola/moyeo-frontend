import { Meta, StoryObj } from "@storybook/react";

import { ProfileItem } from "..";

import MoyeoLogo from "../../../../assets/logo/moyeoLogo.png";

const meta: Meta<typeof ProfileItem> = {
    title: "Components/ProfileItem",
    component: ProfileItem,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ProfileItem>;

export const Primary: Story = {
    args: {
        imageUrl: MoyeoLogo,
        name: "모여",
    },
};

export const OnClick: Story = {
    args: {
        imageUrl: MoyeoLogo,
        name: "모여",
        onClick: () => {},
    },
};
