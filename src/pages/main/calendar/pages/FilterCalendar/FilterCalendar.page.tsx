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
    // 배열 초기화
    const filters = [
        "개인일정",
        "Yourssu",
        "IT프로젝트",
        "SW융합해커톤",
        "유니콘 창업팀",
    ];
    const navigate = useNavigate();

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
                        {filters.map((filter, index) => (
                            <FilterArea key={index}>
                                <Switch label={filter} width="300px" />
                            </FilterArea>
                        ))}
                    </FilterList>
                </Flex.Column>
            </Layout>
        </>
    );
}
