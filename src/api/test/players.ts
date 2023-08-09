import { OnlineUser, User } from "@/types/players";
import { getEnv } from "@/util/env";

export async function getDummyCurrentPlayers(): Promise<OnlineUser[]> {
  const users: OnlineUser[] = [
    {
      name: "sad",
      away: false,
      gravatarHash: "18bf032e4f6dfee92e5b05d9c4c0fd6e",
      userId: 8918,
    },
    {
      name: "Shay",
      away: true,
      gravatarHash: "e195120a8c7ad45b5b8cd19cc6095366",
      userId: 5840,
    },
  ];

  await new Promise((res) => setTimeout(res, getEnv().TEST_TIMEOUT));
  return Promise.resolve(users);
}

export async function getDummyPlayer(userId: string): Promise<User> {
  await new Promise((res) => setTimeout(res, getEnv().TEST_TIMEOUT));
  if (userId === "8918") {
    return Promise.resolve({
      name: "sad",
      created: "2013-04-12T17:15:37.533",
      gravatarHash: "18bf032e4f6dfee92e5b05d9c4c0fd6e",
      stats: {
        userId: 8918,
        playedRounds: 72946,
        maxCombo: 13,
        wins: 14976,
        playedmin: 49114.88537323953,
        maxroundBpm: 230.66635925790396,
        avgroundBpm: 144.45881978771644,
        score: 254.02753906249998,
        rank: 36,
        name: "sad",
      },
    });
  }
  return Promise.resolve({
    name: "Shay",
    created: "2012-05-19T20:08:11.897",
    gravatarHash: "e195120a8c7ad45b5b8cd19cc6095366",
    stats: {
      userId: 5840,
      playedRounds: 102306,
      maxCombo: 14,
      wins: 42426,
      playedmin: 61326.373554408616,
      maxroundBpm: 249.4735589913022,
      avgroundBpm: 135.72981509928417,
      score: 285.156982421875,
      rank: 19,
      name: "Shay",
    },
  });
}
