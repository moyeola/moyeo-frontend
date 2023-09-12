import { MoyeoClient } from "./client";

export const client = new MoyeoClient({
    baseUrl: import.meta.env.VITE_API_HOST || "",
    auth: localStorage.getItem("token") || "",
});
