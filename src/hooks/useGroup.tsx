import { useParams } from "react-router-dom";
import { client } from "../libs/api";
import { useQuery } from "react-query";
import { useUser } from "./useUser";

export function useGroup(groupId?: number) {
    const { groupId: paramsGroupId } = useParams();
    const { user } = useUser();

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

    const memberMe = user?.members.find(
        (member) => member?.group?.id === query.data?.id
    );

    return {
        group: query.data,
        memberMe,
        ...query,
    };
}
