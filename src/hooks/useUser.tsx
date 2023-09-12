import { useQuery } from "react-query";
import { client } from "../libs/api";

export function useUser() {
    const query = useQuery(["user"], async () => {
        const res = await client.users.me.get({});
        return res.user;
    });

    const groups = query.data?.members.map((member) => member.group) || [];

    return {
        user: query.data,
        groups,
        ...query,
    };
}
