import type { Meta, StoryObj } from "@storybook/react";
import { Header, IconButton } from "..";
import { cv } from "../../style";
import { CaretLeft } from "@phosphor-icons/react";
import { TabNav } from "../TabNav/TabNav";

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
                    <IconButton>
                        <CaretLeft />
                    </IconButton>
                </Header.Left>
                <Header.Title>Home</Header.Title>
                <Header.Right></Header.Right>
            </>
        ),
    },
};

export const SubChildren: Story = {
    args: {
        bgColor: cv.bgOnboarding,
        children: (
            <>
                <Header.Left>
                    <IconButton>
                        <CaretLeft />
                    </IconButton>
                </Header.Left>
                <Header.Title>Home</Header.Title>
                <Header.Right></Header.Right>
            </>
        ),
        subChildren: (
            <TabNav
                selected="Menu1"
                tabs={[
                    {
                        title: "Menu1",
                        value: "Menu1",
                    },
                    {
                        title: "Menu2",
                        value: "Menu2",
                    },
                    {
                        title: "Menu3",
                        value: "Menu3",
                        disabled: true,
                    },
                    {
                        title: "Menu4",
                        value: "Menu4",
                    },
                ]}
            />
        ),
    },
};
