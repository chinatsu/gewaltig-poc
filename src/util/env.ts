import { z } from "zod";

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export const serverEnvSchema = z.object({
  ENVIRONMENT: z.string(),
  TEST_TIMEOUT: z.number(),
});

export function getEnv(): ServerEnv {
  return {
    ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT
      ? process.env.NEXT_PUBLIC_ENVIRONMENT
      : "development",
    TEST_TIMEOUT: process.env.NEXT_PUBLIC_TEST_TIMEOUT
      ? parseInt(process.env.NEXT_PUBLIC_TEST_TIMEOUT)
      : 3000,
  };
}
