import { Meta, StoryObj } from "@storybook/react";

import { Image } from ".";
import MoyeoColorLogo from "../../assets/moyeoColorLogo.png";

const meta: Meta<typeof Image> = {
    title: "Components/Image",
    component: Image,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
    args: {
        src: MoyeoColorLogo,
        width: "32px",
    },
};
