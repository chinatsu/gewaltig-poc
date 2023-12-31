"use client";

import { Achievements } from "@/types/achievements";
import { User } from "@/types/players";
import { format, formatDistanceToNow } from "date-fns";
import Image from "next/image";

type PlayerProfileProps = { player: User, achievements: Achievements };

export function PlayerProfile({ player, achievements }: PlayerProfileProps) {

  const challengeNameToTitle = (challengeName: string) => {
    const challenges = new Map<string, string>;
    challenges.set('ol-maserati', 'Maserati');
    challenges.set('ol-survivor', 'Survivor');
    challenges.set('ol-cheese', 'Swiss cheese');
    challenges.set('ol-send', '49.6 µFortnight');
    challenges.set('ol-ten', 'Ten');
    challenges.set('ol-clewett', "James Clewett's");
    challenges.set('ol-qs', 'Quickstart');
    challenges.set('ol-tgm', 'Shi Tai Ye');

    return challenges.get(challengeName)
  }

  const secondsToTime = (duration: number) => {
    const seconds = (duration) % 60;
    const minutes = Math.floor((duration / 60) % 60);
    const hours = Math.floor((duration / (60 * 60)) % 24);

    const displayHours = (hours < 10) ? "0" + hours : hours;
    const displayMinutes = (minutes < 10) ? "0" + minutes : minutes;
    const displaySeconds = (seconds < 10) ? "0" + seconds.toFixed(3) : seconds.toFixed(3);

    return (displayHours === "00" ? "" : displayHours + ":") + displayMinutes + ":" + displaySeconds;
  }


  const relevantScore = (challengeName: string, challengeScore: any) => {
    const challenges = new Map<string, React.ReactNode>;
    challenges.set('ol-maserati', <p>{secondsToTime(challengeScore.playDuration)} ({challengeScore.blocks} blocks)</p>);
    challenges.set('ol-survivor', <p>{secondsToTime(challengeScore.playDuration)}</p>);
    challenges.set('ol-cheese', <p>{secondsToTime(challengeScore.playDuration)} ({challengeScore.blocks} blocks)</p>);
    challenges.set('ol-send', <p>{challengeScore.linesSent} lines</p>);
    challenges.set('ol-ten', <p>{secondsToTime(challengeScore.playDuration)}</p>);
    challenges.set('ol-clewett', <p>{challengeScore.tetrii} tetrises</p>);
    challenges.set('ol-qs', <p>{secondsToTime(challengeScore.playDuration)}</p>);
    challenges.set('ol-tgm', <p>{challengeScore.linesCleared} lines</p>);

    return challenges.get(challengeName)
  }

  const challengeOrder = (challengeName: string) => {
    return ["ol-maserati", "ol-survivor", "ol-cheese", "ol-send", "ol-ten", "ol-clewett", "ol-qs", "ol-tgm"].indexOf(challengeName)
  }

  return (
    <div className="w-full xl:max-w-6xl flex flex-col gap-8">
      <section className="flex gap-2 items-center">
        <Image
          src={`https://gravatar.com/avatar/${player.gravatarHash}?d=mp`}
          alt={`${player.name}'s avatar`}
          width="0"
          height="0"
          sizes="100vw"
          className="w-16 h-auto"
        />
        <h1 className="text-2xl">{player.name}</h1>
      </section>
      {player.stats && (
        <section className="max-w-full prose prose-slate dark:prose-invert">
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
                <th className="text-left w-1/2">Achievement score</th>
                <td>{player.achievements
                  ? Object.entries(player.achievements)
                    .filter((cheevo) => cheevo[0] in achievements)
                    .map((achievement) => achievements[achievement[0]].points)
                    .reduce((acc, score) => acc + score)
                  : 0}
                </td>
              </tr>
              <tr className="border-b">
                <th className="text-left w-1/2">Created</th>
                <td>{format(new Date(player.created), "LLLL do yyyy")}</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
      {player.challenges && (
        <section className="max-w-full prose prose-slate dark:prose-invert">
          <h2>Challenges</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th>Challenge</th>
                <th>Personal best</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(player.challenges)
                .filter((challenge) => challengeNameToTitle(challenge[0]) !== undefined)
                .sort((challengeA, challengeB) => challengeOrder(challengeA[0]) - challengeOrder(challengeB[0]))
                .map((challenge) => (
                  <tr key={challenge[0]}>
                    <th>{challengeNameToTitle(challenge[0])}</th>
                    <td>{relevantScore(challenge[0], challenge[1])}</td>
                    <td>{format(new Date(challenge[1].date), "LLLL do yyyy")} ({formatDistanceToNow(new Date(challenge[1].date), { addSuffix: true })})</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      )}
      {player.achievements && (
        <section className="max-w-full prose prose-slate dark:prose-invert">
          <h2>Achievements</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th>Achievement</th>
                <th>Points</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(player.achievements)
                .filter((cheevo) => cheevo[0] in achievements)
                .sort((a, b) => achievements[b[0]].points - achievements[a[0]].points)
                .map((achievement) => (
                  <tr key={achievement[0]}>
                    <th>{achievements[achievement[0]].title}</th>
                    <td>{achievements[achievement[0]].points}</td>
                    <td>{format(new Date(achievement[1]), "LLLL do yyyy")} ({formatDistanceToNow(new Date(achievement[1]), { addSuffix: true })})</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
