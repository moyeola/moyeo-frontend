import { MemberDto } from "moyeo-object";
import { Flex, IconButton, useModal } from "../../../../../../libs/ui";
import { CrownSimple } from "@phosphor-icons/react";
import { cv } from "../../../../../../libs/ui/style";
import styled from "styled-components";
import { DeleteMemberModal } from "./DeleteMemberModal";
import { useGroup } from "../../../../../../hooks/useGroup";

const MemberAvatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 40px;
    object-fit: cover;
`;

const MemberName = styled.div``;

export interface MemberItemProps {
    member: MemberDto;
}
export function MemberItem({ member }: MemberItemProps) {
    const { group } = useGroup();
    const modal = useModal();

    return (
        <Flex.Between>
            <Flex.Row gap="10px">
                <MemberAvatar src={member.user?.profileImageUrl} />
                <MemberName>{member.nickname || member.user?.name}</MemberName>
            </Flex.Row>
            <Flex.Row>
                {member.role === "OWNER" && (
                    <CrownSimple weight="fill" size={20} color={cv.primary} />
                )}
                {member.role === "MEMBER" && (
                    <IconButton
                        type="button"
                        onClick={() =>
                            modal.open(
                                <DeleteMemberModal
                                    groupId={group?.id || -1}
                                    memberId={member.id}
                                />
                            )
                        }
                    >
                        삭제
                    </IconButton>
                )}
            </Flex.Row>
        </Flex.Between>
    );
}
