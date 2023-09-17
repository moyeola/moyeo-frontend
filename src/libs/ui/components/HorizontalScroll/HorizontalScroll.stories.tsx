import { Meta, StoryObj } from "@storybook/react";

import { HorizontalScroll, ProfileItem } from "..";

import MoyeoLogo from "../../../../assets/logo/moyeoLogo.png";

const meta: Meta<typeof HorizontalScroll> = {
    title: "Components/HorizontalScroll",
    component: HorizontalScroll,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HorizontalScroll>;

export const Primary: Story = {
    args: {
        width: "400px",
        gap: "8px",
        children: (
            <>
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
                <ProfileItem imageUrl={MoyeoLogo} name="모여" />
            </>
        ),
    },
};
