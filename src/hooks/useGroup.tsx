import { useParams } from "react-router-dom";
import { client } from "../libs/api";
import { useQuery } from "react-query";

export function useGroup(groupId?: number) {
    const { groupId: paramsGroupId } = useParams();

    const query = useQuery(
        ["group", groupId],
        async () => {
            const res = await client.groups.get({
                groupId: `${groupId || paramsGroupId}`,
            });
            return res.group;
        },
        {
            onError: (err) => {
                console.error(err);
            },
        }
    );
    return {
        group: query.data,
        ...query,
    };
}
