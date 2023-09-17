import { Meta, StoryObj } from "@storybook/react";

import { Flex, Section } from "..";

const meta: Meta<typeof Section> = {
    title: "Components/Section",
    component: Section,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Section>;

export const Primary: Story = {
    render: () => (
        <Flex width="400px">
            <Section>
                <Section.Header
                    title="Section 색션"
                    moveButton={{
                        text: "text",
                    }}
                />
            </Section>
        </Flex>
    ),
};
