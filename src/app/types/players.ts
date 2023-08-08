import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export const userSchema = z.object({
    name: z.string(),
    created: z.string(),
    gravatarHash: z.string(),
    stats: z.object({
        userId: z.number(),
        playedRounds: z.number(),
        maxCombo: z.number(),
        wins: z.number(),
        playedmin: z.number(),
        maxroundBpm: z.number(),
        avgroundBpm: z.number(),
        score: z.number(),
        rank: z.number(),
        name: z.string()
    }).optional()
})

export type OnlineUser = z.infer<typeof onlineUserSchema>;
export const onlineUserSchema = z.object({
    name: z.string(),
    away: z.boolean(),
    gravatarHash: z.string(),
    userId: z.number(),
    // TODO: other fields!
})