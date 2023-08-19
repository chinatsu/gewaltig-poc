import { LiveInfo } from "@/types/liveinfo";
import { getEnv } from "@/util/env";

export async function getDummyLiveInfo(): Promise<LiveInfo> {
    const liveInfo: LiveInfo = {
      players: [
        {
          guest: false,
          currentscore: 0,
          room: 0,
          team: "RED",
          challenge: "",
          avatarhash: "18bf032e4f6dfee92e5b05d9c4c0fd6e",
          status: "room",
          country: "UK",
          name: "sad",
          afk: false,
          id: 8918,
        },
        {
          id: 5840,
          name: "Shay",
          guest: false,
          currentscore: 0,
          afk: false,
          room: 11,
          team: "RED",
          challenge: "",
          avatarhash: "e195120a8c7ad45b5b8cd19cc6095366",
          status: "room",
          country: "--"
        },
      ],
      rooms: [
        {
          id: 0,
          name: "Free for all",
          mode: "Standard",
          protected: false,
          teamplay: false,
          maxplayers: 2147483647,
          players: 1,
          bestplayer: {
            id: 8918,
            name: "sad",
            guest: false,
            score: 9001
          }
        },
        {
          id: 1,
          name: "Rookie playground",
          mode: "Standard",
          protected: false,
          teamplay: false,
          maxplayers: 2147483647,
          players: 0
        },
        {
          id: 2,
          name: "Cheese factory",
          mode: "Swiss cheese",
          protected: false,
          teamplay: false,
          maxplayers: 2147483647,
          players: 0
        },
        {
          id: 11,
          name: "Shay's room",
          mode: "Standard",
          protected: false,
          teamplay: true,
          maxplayers: 2147483647,
          players: 1,
          bestplayer: {
            id: 5840,
            name: "Shay",
            guest: false,
            score: 0
          }
        }
      ]
    };
  
    await new Promise((res) => setTimeout(res, getEnv().TEST_TIMEOUT));
    return Promise.resolve(liveInfo);
  }