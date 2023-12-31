import { getDummyPlayer } from "@/api/test/players";
import { getEnv } from "@/util/env";
import { Inter } from "next/font/google";
import { PlayerProfile } from "./player";
import { getAchievementsFromAPI, getPlayerFromAPI } from "@/api/endpoints";
import { getDummyAchievements } from "@/api/test/achievements";

type ProfileProps = { userId: string };

const inter = Inter({ subsets: ["latin"] });

export async function Profile({ userId }: ProfileProps) {
  const player = await (getEnv().ENVIRONMENT !== "development"
    ? getPlayerFromAPI(userId)
    : getDummyPlayer(userId));

  const achievements = await (getEnv().ENVIRONMENT !== "development"
    ? getAchievementsFromAPI()
    : getDummyAchievements()); // TODO: cache this one, it's not necessary to fetch all the time

  return (
    <main
      className={`flex-grow flex flex-col p-8 items-center dark:text-slate-300 ${inter.className}`}
    >
      <PlayerProfile player={player} achievements={achievements} />
    </main>
  );
}

export async function ProfileSkeleton() {
  return (
    <main
      className={`flex-grow flex flex-col p-8 items-center dark:text-slate-300 ${inter.className}`}
      aria-label="Fetching user"
      role="progressbar"
      aria-busy
    >
      <div className="w-full xl:max-w-6xl flex flex-col gap-8" aria-hidden>
        <section className="flex gap-2 items-center">
          <div className="h-16 w-16 animate-pulse bg-gray-400"></div>
          <h1 className="h-7 w-32 animate-pulse bg-gray-400 "></h1>
        </section>
        <section>
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <th className="text-left w-1/2">Rank</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Score</th>
                <td className="animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Max Combo</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Max BPM</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Average BPM</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Rounds</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Wins</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Created</th>
                <td className="w-16 animate-pulse bg-gray-400"></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
