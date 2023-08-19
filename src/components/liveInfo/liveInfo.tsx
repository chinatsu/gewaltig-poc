"use client";

import Link from "next/link";
import Image from "next/image";
import { LiveInfo } from "@/types/liveinfo";

type LiveInfoProps = { data: LiveInfo };

const Player = ({ player }: { player: any }) => (
  <Link
    href={`/profile/${player.id}`}
    className={`${player.afk
      ? "bg-slate-600 hover:bg-blue-800"
      : "bg-blue-600 hover:bg-blue-800"
      } transition-all flex flex-col justify-center text-white rounded p-2 no-underline`}
  >
    <div className="flex gap-2 items-center">
      <Image
        src={`https://gravatar.com/avatar/${player.avatarhash}?s=96&d=mp`}
        alt={`${player.name}'s avatar`}
        width={48}
        height={64}
        className="m-0"
      />
      {player.name}
    </div>
    {player.status === "challenge" &&
      <div>
        Practicing {player.challenge}
      </div>
    }
  </Link>
)

export function LiveInfo({ data }: LiveInfoProps) {
  return (
    <section>
      <div>
        <h2>Rooms</h2>
        <div>
          {data.rooms.filter((room) => room.players > 0).map((room) => (
            <div>
              <h3>{room.name}</h3>
              <ul className="list-none flex flex-wrap">
                {data.players.filter((player) => player.status === "room" && player.room === room.id).map((player) => (
                  <li key={player.name}>
                    <Player player={player} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {data.players.filter((player) => player.status === "challenge").length > 0 &&
        <div>
          <h2>Challenge players</h2>
          <ul className="list-none flex flex-wrap">
            {data.players.filter((player) => player.status === "challenge").map((player) => (
              <li key={player.name}>
                <Player player={player} />
              </li>
            ))}
          </ul>
        </div>
      }
      {data.players.filter((player) => player.status === "lobby").length > 0 &&
        <div>
          <h2>Lobby</h2>
          <ul className="list-none flex flex-wrap">
            {data.players.filter((player) => player.status === "lobby").map((player) => (
              <li key={player.name}>
                <Player player={player} />
              </li>
            ))}
          </ul>
        </div>
      }
    </section>
  );

  <ul className="flex flex-wrap gap-2 !p-0 !m-0">
    {data.players.map((player) => (
      <ul key={`player-${player.name}`} className="!p-0 !m-0">

      </ul>
    ))}
  </ul>
}
