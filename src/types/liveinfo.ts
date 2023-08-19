import { z } from "zod";

export type LiveInfo = z.infer<typeof liveInfoSchema>;
export const liveInfoSchema = z.object({
    players: z.array(z.object({
        id: z.number(), // -1 if guest, userId if not
        name: z.string(),
        guest: z.boolean(),
        currentscore: z.number(),
        afk: z.boolean(),
        room: z.boolean().or(z.number()), // false if not in a room, otherwise, room id
        team: z.boolean().or(z.string()), // false if not on a team, RED/BLUE/GREEN/YELLOW otherwise
        challenge: z.string(), // challenge by name
        avatarhash: z.string(), // gravatarHash
        status: z.string(), // room | challenge | lobby
        country: z.string(), // ISO 3166 alpha-2 country code | --
    })),
    rooms: z.array(z.object({
        id: z.number(),
        name: z.string(),
        mode: z.string(),
        protected: z.boolean(),
        teamplay: z.boolean(),
        maxplayers: z.number(),
        players: z.number(),
        bestplayer: z.object({
            id: z.number(),
            name: z.string(),
            guest: z.boolean(),
            score: z.number()
        }).optional()
    }))
})