"use client";

import { OnlineUser } from "@/types/players";
import Link from "next/link";
import Image from "next/image";

type OnlinePlayersProps = { players: OnlineUser[] };

export function OnlinePlayers({ players }: OnlinePlayersProps) {
  return (
    <ul className="flex gap-2 !p-0 !m-0">
      {players.map((player) => (
        <ul key={`player-${player.name}`} className="!p-0 !m-0">
          <Link
            href={`profile/${player.userId}`}
            className={`${
              player.away
                ? "bg-slate-600 hover:bg-blue-800"
                : "bg-blue-600 hover:bg-blue-800"
            } transition-all flex gap-2 h-16 text-white rounded p-2 items-center`}
          >
            <Image
              src={`https://gravatar.com/avatar/${player.gravatarHash}?s=96&d=mp`}
              alt={`${player.name}'s avatar`}
              width={48}
              height={64}
            />
            {player.name}
          </Link>
        </ul>
      ))}
    </ul>
  );
}
