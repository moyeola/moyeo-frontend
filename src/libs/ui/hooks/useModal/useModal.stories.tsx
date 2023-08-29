import { Meta, StoryObj } from "@storybook/react";

import { useModal } from "..";
import { Button, Modal, Spacer, Text } from "../..";

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

function WithModalTemplate() {
    const modal = useModal();

    const open = () => {
        modal.open(
            <Modal>
                <Modal.Header>정말로 삭제하시겠어요?</Modal.Header>
                <Modal.Body>삭제한 일정은 복구되지 않습니다.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={modal.close}>
                        삭제
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const WithModal: Story = {
    render: WithModalTemplate,
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

function NestedTemplate() {
    const modal = useModal();

    const openModal1 = () => {
        modal.open(
            <Text>
                <Button onClick={openModal2}>Open Nested Modal</Button>
            </Text>
        );
    };

    const openModal2 = () => {
        modal.open("Nested Modal", {
            direction: "bottom",
        });
    };

    return <Button onClick={openModal1}>Open Modal</Button>;
}

export const Nested: Story = {
    render: NestedTemplate,
};
