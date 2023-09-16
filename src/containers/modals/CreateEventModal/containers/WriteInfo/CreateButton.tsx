import styled from "styled-components";
import { cv } from "../../../../../libs/ui/style";
import { useCreateEvent } from "./useCreateEvent";
import { Plus } from "@phosphor-icons/react";
import { useRecoilValue } from "recoil";
import { createEventDataAtom } from "../../state/createEventInfo.state";

const StyledCreateButton = styled.button`
    min-width: 32px;
    height: 32px;
    padding: 4px;
    border: 0px;
    outline: 0px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${cv.gray07};
    background-color: ${cv.primary};
    transition: 150ms;
    cursor: pointer;
    color: ${cv.gray07};
    gap: 4px;
    transition: 150ms;

    &:disabled {
        background-color: ${cv.statusInactive};
        cursor: not-allowed;
    }
`;

export function CreateEventButton() {
    const { createEvent } = useCreateEvent();
    const data = useRecoilValue(createEventDataAtom);

    return (
        <StyledCreateButton
            onClick={() => createEvent()}
            disabled={!data.title}
        >
            <Plus size={20} weight="bold" />
        </StyledCreateButton>
    );
}
