import { useMemo } from "react";
import {
    StyledEntity,
    StyledEntityBannerImage,
    StyledEntityDescription,
    StyledEntityLeft,
    StyledEntityRight,
    StyledEntitySubTitle,
    StyledEntityTitle,
} from "./Entity.style";

import FireActive from "./assets/fire-active.png";
import FireInactive from "./assets/fire-inactive.png";
import CalendarActive from "./assets/calendar-active.png";
import CalendarInactive from "./assets/calendar-inactive.png";

export interface EntityProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    banner?: {
        type: "icon";
        icon: "fire" | "calendar";
    };
    inactive?: boolean;
}
export function Entity({
    banner,
    description,
    inactive = false,
    subtitle: subTitle,
    title,
}: EntityProps) {
    const EntityRight = useMemo(() => {
        if (banner && banner?.type === "icon") {
            if (banner.icon === "fire") {
                return (
                    <StyledEntityBannerImage
                        src={inactive ? FireInactive : FireActive}
                    />
                );
            }

            if (banner.icon === "calendar") {
                return (
                    <StyledEntityBannerImage
                        src={inactive ? CalendarInactive : CalendarActive}
                    />
                );
            }
        }
    }, [banner, inactive]);

    return (
        <StyledEntity>
            <StyledEntityLeft>
                {title && <StyledEntityTitle>{title}</StyledEntityTitle>}
                {subTitle && (
                    <StyledEntitySubTitle>{subTitle}</StyledEntitySubTitle>
                )}
                {description && (
                    <StyledEntityDescription $inactive={inactive}>
                        {description}
                    </StyledEntityDescription>
                )}
            </StyledEntityLeft>
            <StyledEntityRight>{EntityRight}</StyledEntityRight>
        </StyledEntity>
    );
}
