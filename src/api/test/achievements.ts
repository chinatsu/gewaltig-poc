import { Achievements } from "@/types/achievements";
import { getEnv } from "@/util/env";

export async function getDummyAchievements(): Promise<Achievements> {

    const achievements: Achievements = {
        "300": { "title": "Spartaaa!", "description": "Send 300 lines to your opponents in a match.", "isPublic": false, "points": 83, "count": 378 },
        "9000": { "title": "It's over 9000!", "description": "Clear 9'000 lines in matches.", "isPublic": true, "points": 22, "count": 3242 },
        "amber_lamps": { "title": "Amber Lamps", "description": "Accumulate a day of playtime in matches.", "isPublic": true, "points": 18, "count": 1329 },
    }
    await new Promise((res) => setTimeout(res, getEnv().TEST_TIMEOUT));
    return Promise.resolve(achievements);
}