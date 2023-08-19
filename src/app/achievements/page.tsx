import { getAchievementsFromAPI } from "@/api/endpoints";
import { getDummyAchievements } from "@/api/test/achievements";
import { ProfileSkeleton } from "@/components/profile/profile";
import { getEnv } from "@/util/env";
import { Inter } from "next/font/google";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export default async function Achievements() {
    const achievements = await (getEnv().ENVIRONMENT !== "development"
        ? getAchievementsFromAPI()
        : getDummyAchievements());

    return (
        <main
            className={`flex-grow flex flex-col p-8 items-center  ${inter.className}`}
        >
            <div className="w-full xl:max-w-6xl prose prose-slate dark:prose-invert">
                <h1>Achievements</h1>
                <Suspense fallback={<ProfileSkeleton /> /* TODO: fix this silly skeleton */}>
                    <ul className="list-none">
                        {Object.entries(achievements)
                            .filter((cheevo) => cheevo[1].isPublic)
                            .sort((cheevo) => cheevo[1].count)
                            .map((cheevo) => (
                                <li key={cheevo[0]}>
                                    <h2 className="text-2xl mb-2">{cheevo[1].title}</h2>
                                    <p>{cheevo[1].points} points</p>
                                    <p>{cheevo[1].count} players</p> {/* TODO: sort out player percentage */}
                                    <p className="italic">{cheevo[1].description}</p>
                                </li>
                            ))}
                    </ul>
                </Suspense>
            </div>
        </main>
    );
}