import { useQuery } from "react-query";
import { client } from "../libs/api";
import { APIResponseError } from "endpoint-client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useUser() {
    const navigate = useNavigate();
    const query = useQuery(
        ["user"],
        async () => {
            const res = await client.users.me.get({});
            return res.user;
        },
        {
            onError: (err) => {
                if (err instanceof APIResponseError) {
                    if (err.status == 401) {
                        localStorage.removeItem("token");
                        toast.warn("로그인이 필요해요.");
                        navigate("/intro");
                    }
                }
            },
        }
    );

    const groups = query.data?.members.map((member) => member.group) || [];

    return {
        user: query.data,
        groups,
        ...query,
    };
}
