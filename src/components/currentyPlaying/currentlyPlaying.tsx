import { getCurrentPlayersFromAPI } from "@/app/api/players"
import { getDummyCurrentPlayers } from "@/app/api/test/players"
import { getEnv } from "@/util/env"
import { ReactElement } from "react"
import { range } from "remeda"
import { OnlinePlayers } from "./onlinePlayers"


export async function CurrentlyPlaying(): Promise<ReactElement | ReactElement[] | null>  {
    const players = await (getEnv().ENVIRONMENT !== 'development'
        ? getCurrentPlayersFromAPI()
        : getDummyCurrentPlayers()
    );

    if (players.length === 0) {
        return null
    }

    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-xl">Currently playing</h2>
            <OnlinePlayers players={players} />
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