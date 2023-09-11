import { useParams } from "react-router-dom";

export function GroupPage() {
    const { groupId } = useParams();

    return <div>{groupId}</div>;
}
