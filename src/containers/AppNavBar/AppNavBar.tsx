import { CalendarBlank, House, User, Users } from "@phosphor-icons/react";
import { NavBar } from "../../libs/ui";

export function AppNavBar() {
    return (
        <NavBar>
            <NavBar.Destination icon={<House />} label="홈" />
            <NavBar.Destination icon={<Users />} label="그룹" />
            <NavBar.Destination icon={<CalendarBlank />} label="캘린더" />
            <NavBar.Destination icon={<User />} label="마이페이지" />
        </NavBar>
    );
}
