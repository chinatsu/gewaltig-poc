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
  achievements: z.record(z.string(), z.string()).optional(),
  challenges: z.record(z.string(), z.object({
    playDuration: z.number(),
    blocks: z.number(),
    date: z.string(),
    linesCleared: z.number(),
    linesSent: z.number(),
    tetrii: z.number(),
  })).optional()
});
