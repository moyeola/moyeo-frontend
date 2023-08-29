import { Meta, StoryObj } from "@storybook/react";

import { useModal } from "..";
import { Button, Spacer, Text } from "../..";

const meta: Meta = {
    title: "Hooks/useModal",
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj;

function Template() {
    const modal = useModal();
    const open = () => {
        modal.open(<Text>useModal Hook</Text>);
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const Primary: Story = {
    render: Template,
};

function DirectionBottomTemplate() {
    const modal = useModal();
    const open = () => {
        modal.open(<Text>useModal Hook</Text>, {
            direction: "bottom",
        });
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const DirectionBottom: Story = {
    render: DirectionBottomTemplate,
};

function ScrollTemplate() {
    const modal = useModal();
    const open = () => {
        modal.open(<Spacer height="1200px">useModal Hook</Spacer>);
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const Scroll: Story = {
    render: ScrollTemplate,
};

function DirectionBottomScrollTemplate() {
    const modal = useModal();
    const open = () => {
        modal.open(<Spacer height="1200px">useModal Hook</Spacer>, {
            direction: "bottom",
        });
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const DirectionBottomScroll: Story = {
    render: DirectionBottomScrollTemplate,
};
