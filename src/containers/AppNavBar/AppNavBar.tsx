import { CalendarBlank, House, User, Users } from "@phosphor-icons/react";
import { NavBar } from "../../libs/ui";
import { useNavigate } from "react-router-dom";

export interface AppNavBarProps {
    selected: "home" | "group" | "calendar" | "myPage";
}
export function AppNavBar({ selected }: AppNavBarProps) {
    const navigate = useNavigate();

    return (
        <NavBar>
            <NavBar.Destination
                icon={<House />}
                label="홈"
                selected={selected === "home"}
                onClick={() => navigate("/main/home")}
            />
            <NavBar.Destination
                icon={<Users />}
                label="그룹"
                selected={selected === "group"}
                onClick={() => navigate("/main/groups")}
            />
            <NavBar.Destination
                icon={<CalendarBlank />}
                label="캘린더"
                selected={selected === "calendar"}
                onClick={() => navigate("/main/calendar")}
            />
            <NavBar.Destination
                icon={<User />}
                label="마이페이지"
                selected={selected === "myPage"}
                onClick={() => navigate("/main/my-page")}
            />
        </NavBar>
    );
}
