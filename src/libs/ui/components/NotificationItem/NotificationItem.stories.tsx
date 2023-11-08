import { Meta, StoryObj } from "@storybook/react";

import { NotificationItem } from ".";

const meta: Meta<typeof NotificationItem> = {
    title: "Components/NotificationItem",
    component: NotificationItem,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        notification: {
            id: 1,
            type: "GROUP_SCHEDULE",
            action: {
                type: "to",
                url: "/main/groups/1/schedules/1",
            },
            author: {
                type: "GROUP",
                id: 1,
                name: "프론트엔드 스터디",
            },
            body: "프론트엔드 스터디 일정이 추가되었습니다.",
            createdAt: new Date().toISOString(),
            title: "프론트엔드 스터디 일정.",
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: "400px" }}>
                <Story />
            </div>
        ),
    ],
};
