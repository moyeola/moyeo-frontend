import { MoyeoClient } from "./client";

export const client = new MoyeoClient({
    baseUrl: process.env.REACT_APP_API_SERVER || "",
    auth: localStorage.getItem("token") || "",
});
