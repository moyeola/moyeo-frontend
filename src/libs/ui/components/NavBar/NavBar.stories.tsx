import { Meta, StoryObj } from "@storybook/react";

import { NavBar } from ".";
import { CalendarBlank, House, User, Users } from "@phosphor-icons/react";
import { Layout } from "..";
import { cv } from "../../style";

const meta: Meta<typeof NavBar> = {
    title: "Components/NavBar",
    component: NavBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
    render: () => (
        <>
            <Layout minHeight="100dvh" bgColor={cv.bgHome} />
            <NavBar>
                <NavBar.Destination icon={<House />} label="홈" />
                <NavBar.Destination icon={<Users />} label="그룹" />
                <NavBar.Destination icon={<CalendarBlank />} label="캘린더" />
                <NavBar.Destination icon={<User />} label="마이페이지" />
            </NavBar>
        </>
    ),
};
