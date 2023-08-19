import { z } from "zod";

export type Achievements = z.infer<typeof achievementsSchema>;
export const achievementsSchema = z.record(z.string(), z.object({
    title: z.string(),
    description: z.string(),
    isPublic: z.boolean(),
    points: z.number(),
    count: z.number()
}))
