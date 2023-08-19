import { User } from "@/types/players";
import { getApi } from "./instance";
import { LiveInfo } from "@/types/liveinfo";
import { Achievements } from "@/types/achievements";

export async function getLiveInfo(): Promise<LiveInfo> {
  const api = await getApi();
  const response = await api.get("/liveinfo");
  return response.data;
}

export async function getAchievementsFromAPI(): Promise<Achievements> {
  const api = await getApi();
  const response = await api.get("/achievements");
  return response.data
}

export async function getPlayerFromAPI(userId: string): Promise<User> {
  const api = await getApi();
  const response = await api.get(`/user/${userId}`);
  return response.data;
}
