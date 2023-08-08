import { getPlayerFromAPI } from "@/app/api/players";
import { getDummyPlayer } from "@/app/api/test/players";
import { getEnv } from "@/util/env";
import { format } from "date-fns";
import { Inter } from "next/font/google";
import Image from "next/image";

type ProfileProps = {userId: string}

const inter = Inter({ subsets: ['latin'] })

export async function Profile({userId}: ProfileProps) {
    const player = await (getEnv().NODE_ENV !== 'development'
        ? getPlayerFromAPI(userId)
        : getDummyPlayer(userId)
    );

    return <main className={`flex min-h-screen flex-col p-8 items-center ${inter.className}`}>
        <div className="w-full md:max-w-3xl flex flex-col gap-8">
            <section className="flex gap-2 items-center">
                <Image src={`https://gravatar.com/avatar/${player.gravatarHash}?s=96&d=mp`} alt={`${player.name}'s avatar`} width={64} height={96} />
                <h1 className="text-2xl">{player.name}</h1>
            </section>
            {player.stats && <section>
                <table className="w-full">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Rank</th>
                            <td>{player.stats.rank}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Score</th>
                            <td>{player.stats.score.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Max Combo</th>
                            <td>{player.stats.maxCombo}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Max BPM</th>
                            <td>{player.stats.maxroundBpm.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Average BPM</th>
                            <td>{player.stats.avgroundBpm.toFixed(2)}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Rounds</th>
                            <td>{player.stats.playedRounds}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Wins</th>
                            <td>{player.stats.wins}</td>
                        </tr>
                        <tr className="border-b">
                            <th className="text-left w-1/2">Created</th>
                            <td>{format(new Date(player.created), "LLLL do yyyy")}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            }
        </div>
    </main>
}

export async function ProfileSkeleton() {
    return (
        <main className={`flex min-h-screen flex-col p-8 items-center ${inter.className}`} aria-label="Fetching user" role="progressbar" aria-busy>
        <div className="w-full md:max-w-3xl flex flex-col gap-8" aria-hidden>
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
    )
}