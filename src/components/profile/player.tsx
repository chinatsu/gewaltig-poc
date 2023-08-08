"use client"

import { User } from "@/types/players"
import { format } from "date-fns"
import Image from "next/image"

type PlayerProfileProps = {player: User}

export function PlayerProfile({player}: PlayerProfileProps) {
    return <div className="w-full md:max-w-3xl flex flex-col gap-8">
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
}