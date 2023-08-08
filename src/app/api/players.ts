import { OnlineUser, User } from "@/types/players";
import { getApi } from "./instance";

export async function getCurrentPlayersFromAPI(): Promise<OnlineUser[]> {
    const api = await getApi();
    const response = await api.get("/currentPlayers"); // TODO: correct url whenever the endpoint exists
    return response.data;
}

export async function getPlayerFromAPI(userId: string): Promise<User> {
    const api = await getApi();
    const response = await api.get(`/user/${userId}`);
    return response.data;
}