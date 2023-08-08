import { getCurrentPlayersFromAPI } from "@/app/api/players"
import { getDummyCurrentPlayers } from "@/app/api/test/players"
import { getEnv } from "@/util/env"
import { ReactElement } from "react"
import { range } from "remeda"
import Image from 'next/image'
import Link from "next/link"


export async function CurrentlyPlaying(): Promise<ReactElement | ReactElement[] | null>  {
    const players = await (getEnv().NODE_ENV !== 'development'
        ? getCurrentPlayersFromAPI()
        : getDummyCurrentPlayers()
    );

    if (players.length === 0) {
        return null
    }

    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-xl">Currently playing</h2>
            <ul className="flex gap-2">
                {players.map((player) => 
                    <ul key={`player-${player.name}`} >
                        <Link href={`profile/${player.userId}`} className={`${player.away ? "bg-slate-600 hover:bg-blue-800" : "bg-blue-600 hover:bg-blue-800"} transition-all flex gap-2 h-16 text-white rounded p-2 items-center`}>
                            <Image src={`https://gravatar.com/avatar/${player.gravatarHash}?s=96&d=mp`} alt={`${player.name}'s avatar`} width={48} height={64} />
                            {player.name}
                        </Link>
                    </ul>)}
            </ul>
        </section>
    )
}

export function CurrentlyPlayingSkeleton({ count = 1 }: { count?: number }): ReactElement {
    return (
        <div aria-label="Fetching currently playing users" role="progressbar" aria-busy>
            <div className="flex animate-pulse flex-col" aria-hidden>
                <div className="mb-2 h-7 w-18 rounded bg-gray-400"></div>
                <div className="flex gap-2">
                    {range(0, count).map((i) => (
                        <div key={i} className="h-16 w-32 rounded bg-gray-400"></div>
                    ))}
                </div>
            </div>
        </div>
    )
}