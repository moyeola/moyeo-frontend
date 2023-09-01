import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "..";
import { cv } from "../../style";
import { CaretLeft } from "@phosphor-icons/react";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Components/Header",
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {
        bgColor: cv.bgHome,
        children: (
            <>
                <Header.Left>
                    <CaretLeft />
                </Header.Left>
                <Header.Title>Home</Header.Title>
                <Header.Right></Header.Right>
            </>
        ),
    },
};
