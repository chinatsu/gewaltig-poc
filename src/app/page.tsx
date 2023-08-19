import { Inter } from "next/font/google";
import { Suspense } from "react";
import { CurrentlyPlaying, CurrentlyPlayingSkeleton } from "@/components/liveInfo/currentlyPlaying";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main
      className={`flex-grow flex flex-col p-8 items-center ${inter.className}`}
    >
      <div className="w-full xl:max-w-6xl prose prose-slate dark:prose-invert">
        <Suspense fallback={<CurrentlyPlayingSkeleton count={2} />}>
          <CurrentlyPlaying />
        </Suspense>
      </div>
    </main>
  );
}
