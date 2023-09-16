import { StyledTabNav, StyledTabNavTab } from "./StyledTabNav";

export interface TabNavProps {
    tabs: {
        title: string;
        value: string;
        disabled?: boolean;
        onClick?: () => void;
    }[];
    selected: string;
    /**
     * Tab을 클릭했을 때 실행되는 함수입니다. Tab에 onClick이 있을 경우 실행되지 않습니다.
     */
    setSelected?: (value: string) => void;
}
export function TabNav({ selected, tabs, setSelected }: TabNavProps) {
    return (
        <StyledTabNav>
            {tabs.map((tab) => (
                <StyledTabNavTab
                    key={tab.value}
                    $selected={selected === tab.value}
                    $disabled={tab.disabled}
                    onClick={tab.onClick ?? (() => setSelected?.(tab.value))}
                >
                    {tab.title}
                </StyledTabNavTab>
            ))}
        </StyledTabNav>
    );
}
