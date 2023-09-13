import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { EmptyEntity, Entity, Flex, Skeleton } from "../../libs/ui";
import { cv } from "../../libs/ui/style";

export function GroupList() {
    const navigate = useNavigate();
    const { groups, isLoading } = useUser();

    return (
        <>
            {isLoading && (
                <Flex.Center>
                    <Skeleton width="100%" height="110px" />
                </Flex.Center>
            )}
            {!isLoading &&
                groups &&
                groups.length !== 0 &&
                groups.map((group) => (
                    <Entity
                        key={group?.id}
                        title={
                            group?.name || (
                                <span style={{ color: cv.gray05 }}>
                                    (그룹 이름 없음)
                                </span>
                            )
                        }
                        subtitle={group?.description}
                        description="알림 2개"
                        banner={{
                            type: "icon",
                            icon: "fire",
                        }}
                        onClick={() => navigate(`/main/groups/${group?.id}`)}
                    />
                ))}
            {!isLoading && groups && groups.length === 0 && (
                <EmptyEntity>
                    <span
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        현재 소속된 팀이 없습니다.
                    </span>
                    <br />
                    팀을 개설하거나 가입해보세요!
                </EmptyEntity>
            )}
        </>
    );
}
