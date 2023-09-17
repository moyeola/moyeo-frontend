import { Image } from "..";
import { StyledProfileItem, StyledProfileItemName } from "./ProfileItem.style";

export interface ProfileItemProps {
    imageUrl: string;
    name?: string;
    onClick?: () => void;
}
export function ProfileItem({ imageUrl, name, onClick }: ProfileItemProps) {
    return (
        <StyledProfileItem onClick={onClick}>
            <Image
                src={imageUrl}
                width="52px"
                height="52px"
                style={{
                    borderRadius: "50%",
                }}
            />
            <StyledProfileItemName>{name}</StyledProfileItemName>
        </StyledProfileItem>
    );
}
