import { getLiveInfo } from "@/api/endpoints";
import { getEnv } from "@/util/env";
import { ReactElement } from "react";
import { range } from "remeda";
import { LiveInfo } from "./liveInfo";
import { getDummyLiveInfo } from "@/api/test/liveinfo";

export async function CurrentlyPlaying(): Promise<
  ReactElement | ReactElement[] | null
> {
  const liveInfo = await (getEnv().ENVIRONMENT !== "development"
    ? getLiveInfo()
    : getDummyLiveInfo());

  if (liveInfo == undefined || liveInfo == null || liveInfo.players.length === 0 || liveInfo.rooms.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6">
      <LiveInfo data={liveInfo} />
    </section>
  );
}

export function CurrentlyPlayingSkeleton({
  count = 1,
}: {
  count?: number;
}): ReactElement {
  // TODO: make this look more like the actual result
  return (
    <div
      aria-label="Fetching currently playing users"
      role="progressbar"
      aria-busy
    >
      <div className="flex animate-pulse flex-col" aria-hidden>
        <div className="mb-2 h-7 w-18 rounded bg-gray-400"></div>
        <div className="flex gap-2">
          {range(0, count).map((i) => (
            <div key={i} className="h-16 w-32 rounded bg-gray-400"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
