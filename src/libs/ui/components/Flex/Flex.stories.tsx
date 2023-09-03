import { Meta, StoryObj } from "@storybook/react";
import { styled } from "styled-components";

import { Flex } from ".";
import { ComponentProps } from "react";

const meta: Meta<typeof Flex> = {
    title: "Components/Flex",
    component: Flex,
    parameters: {
        layout: "centered",
    },
    argTypes: {},
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Flex>;

const Item = styled.div`
    width: 100px;
    height: 100px;
    background-color: #353535;
    border-radius: 4px;
`;

export const Primary: Story = {
    render: (args: ComponentProps<typeof Flex>) => (
        <Flex {...args}>
            <Item />
            <Item />
            <Item />
        </Flex>
    ),
    args: {
        gap: 16,
    },
};
