import { Layout, Flex, Text, Header, IconButton} from "../../../../../libs/ui";
import { cv } from "../../../../../libs/ui/style";
import styled from "styled-components";
import Toggle from "react-toggle";
import { useState } from "react";
import "react-toggle/style.css"; // 스타일 임포트
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
    justify-content: space-between;
    width: 100%;
`;

const CustomToggle = styled(Toggle)`
    & .react-toggle-track {
    background-color: #E0E0E0; /* 토글이 꺼진 상태의 배경색 */
}

& .react-toggle-thumb {
    border-color: #FFFFFF; /* 토글이 꺼진 상태의 레버 색상 */
}

&.react-toggle--checked .react-toggle-track {
    background-color: ${cv.primary}; /* 토글이 켜진 상태의 배경색 */
}

&.react-toggle--checked .react-toggle-thumb {
    border-color: ${cv.gray07}; /* 토글이 켜진 상태의 레버 색상 */
}

&.react-toggle--focus .react-toggle-thumb {
    box-shadow: none; /* 포커스 상태일 때의 스타일 */
}

&.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: none; /* 클릭 상태일 때의 스타일 */
}

&.react-toggle--checkd:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${cv.primary}; /* 마우스 호버 상태일 때의 스타일 */
}

// 토글이 꺼진 상태에서의 호버
&:hover:not(.react-toggle--checked) .react-toggle-track {
    background-color: ${cv.gray05};
}

// 토글이 켜진 상태에서의 호버
&.react-toggle--checked:hover .react-toggle-track {
    background-color: ${cv.primary};
}
`;



export function FilterCalendarPage() {
    // 배열 초기화
    const filters = ["개인일정", "Yourssu", "IT프로젝트", "SW융합해커톤", "유니콘 창업팀"];

    // 각각의 토글 상태를 관리하는 state
    const [toggleStates, setToggleStates] = useState(
        new Array(filters.length).fill(true)
    );
    
    // 토글 상태를 업데이트하는 함수
    const handleToggleChange = (index:number) => {
        const newToggleStates = [...toggleStates];
        newToggleStates[index] = !newToggleStates[index];
        setToggleStates(newToggleStates);
    };

    const navigate = useNavigate();

    return (
        <>
            <Header bgColor={cv.bgHome}>

                <Header.Left>
                        <IconButton
                            onClick={() => navigate(`/main/calendar`)}
                        >
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
                                <Text>{filter}</Text>
                                <CustomToggle
                                    checked={toggleStates[index]}
                                    onChange={() => handleToggleChange(index)}
                                    icons={false}
                                />
                            </FilterArea>
                        ))}
                    </FilterList>
                </Flex.Column>
            </Layout>
        </>
    );
}
