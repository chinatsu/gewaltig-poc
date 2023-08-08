import { z } from "zod"

export type ServerEnv = z.infer<typeof serverEnvSchema>
export const serverEnvSchema = z.object({
    NODE_ENV: z.string(),
    TEST_TIMEOUT: z.number(),
})

export function getEnv(): ServerEnv {
    return {
        NODE_ENV: process.env.NODE_ENV,
        TEST_TIMEOUT: 3000
    }
}