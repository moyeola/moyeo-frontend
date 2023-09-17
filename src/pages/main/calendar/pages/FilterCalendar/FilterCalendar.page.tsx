import {
    Layout,
    Flex,
    Header,
    IconButton,
    Switch,
} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CaretLeft } from "@phosphor-icons/react";
import { useQuery } from "react-query";
import { client } from "../../../../../libs/api";
import { useRecoilState } from "recoil";
import { calendarFilterAtom } from "../../state/calendarFilter.state";

const FilterList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 27px;
`;

const FilterArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export function FilterCalendarPage() {
    const navigate = useNavigate();
    const [calendarFilter, setCalendarFilter] =
        useRecoilState(calendarFilterAtom);
    const { data: calendars } = useQuery(["calendars"], async () => {
        const res = await client.calendars.list({});
        return res.calendars;
    });

    const toggleCalendarFilter = (calendarId: number) => {
        if (calendarFilter.hiddenCalendarIds.includes(calendarId)) {
            setCalendarFilter({
                ...calendarFilter,
                hiddenCalendarIds: calendarFilter.hiddenCalendarIds.filter(
                    (id) => id !== calendarId
                ),
            });
        } else {
            setCalendarFilter({
                ...calendarFilter,
                hiddenCalendarIds: [
                    ...calendarFilter.hiddenCalendarIds,
                    calendarId,
                ],
            });
        }
    };

    return (
        <>
            <Header bgColor={cv.bgHome}>
                <Header.Left>
                    <IconButton onClick={() => navigate(`/main/calendar`)}>
                        <CaretLeft weight="regular" color={cv.gray01} />
                    </IconButton>
                </Header.Left>

                <Header.Title>일정 필터링</Header.Title>
                <Header.Right />
            </Header>
            <Layout
                paddingTop="90px"
                paddingBottom="120px"
                bgColor={cv.bgHome}
                minHeight="100vh"
            >
                <Flex.Column gap="30px">
                    <FilterList>
                        {calendars?.map((calendar, index) => (
                            <FilterArea key={index}>
                                <Switch
                                    label={calendar.name}
                                    checked={
                                        !calendarFilter.hiddenCalendarIds.includes(
                                            calendar.id
                                        )
                                    }
                                    onChange={() =>
                                        toggleCalendarFilter(calendar.id)
                                    }
                                />
                            </FilterArea>
                        ))}
                    </FilterList>
                </Flex.Column>
            </Layout>
        </>
    );
}
