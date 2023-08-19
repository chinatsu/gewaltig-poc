import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export const userSchema = z.object({
  name: z.string(),
  created: z.string(),
  gravatarHash: z.string(),
  stats: z
    .object({
      userId: z.number(),
      playedRounds: z.number(),
      maxCombo: z.number(),
      wins: z.number(),
      playedmin: z.number(),
      maxroundBpm: z.number(),
      avgroundBpm: z.number(),
      score: z.number(),
      rank: z.number(),
      name: z.string(),
    })
    .optional(),
});

export type OnlineUser = z.infer<typeof onlineUserSchema>;
export const onlineUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  guest: z.boolean(),
  currentscore: z.number(),
  afk: z.boolean(),
  room: z.boolean().or(z.number()), 
  team: z.boolean().or(z.string()),
  challenge: z.string(),
  avatarhash: z.string(),
  status: z.string(),
  country: z.string(),
});
