import { Carousel } from "@/components/carousel";
import {
  CurrentlyPlaying,
  CurrentlyPlayingSkeleton,
} from "@/components/currentyPlaying/currentlyPlaying";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-8 items-center ${inter.className}`}
    >
      <div className="w-full md:max-w-3xl flex flex-col gap-8">
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl">Cultris II</h1>
          <p>
            Cultris II is one of the fastest Tetris®-clones ever! Train your
            reflexes in the single player challenge modes, enjoy a split-screen
            match with your friends or play over the Internet with the best of
            the best. Cultris II not only supports various game modes, but all
            of them with team-play. The exquisite graphics and stylish jungle
            music puts other clones to shame. This is not your grand
            mother&apos;s Tetris® anymore...
          </p>
          <Carousel />
        </section>
        <Suspense fallback={<CurrentlyPlayingSkeleton count={2} />}>
          <CurrentlyPlaying />
        </Suspense>
        <section className="flex flex-col gap-6">
          <h2 className="text-xl">Basic Rules</h2>
          <p>
            There are seven different Tetris pieces which all consist of four
            square blocks, hence the name Tetris. During the game these pieces
            will appear in random order (Cultris II uses a special history-based
            randomizer not a &quot;bag randomizer&quot;) at the top of your
            playfield and then they&apos;ll start to fall down. You are able to
            rotate them and move them left or right. When the piece reaches the
            bottom of your playfield or hits another piece on the field it stops
            moving and another piece will appear at the top of the playfield.
            You lose the game if a starting piece cannot be spawned. You can
            prevent this by deleting lines. If a horizontal line of your field
            is completely filled with parts of pieces you dropped, the line will
            be removed and the whole playfield above this line shifts down
            accordingly. The longer you play the game the faster the pieces will
            fall.
          </p>
        </section>
        <section className="flex flex-col gap-6">
          <h2 className="text-xl">Screen Layout</h2>
          <Image
            src="/images/manual.jpg"
            alt="Screen layout"
            height={455}
            width={768}
          />
        </section>
        <section className="flex flex-col gap-6">
          <h2 className="text-xl">Game Modes</h2>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Standard Multiplayer</h3>
            <p>
              Playing Tetris alone can be fun, but Cultris II was especially
              designed to be most entertaining when playing against others. Your
              problem won&apos;t be the speed of the pieces falling but the
              skill of other players, as they send you Garbagelines and you
              them. Garbagelines are horizontal lines of grey blocks that are
              inserted from the bottom of your playfield, pushing all other
              blocks on your field upwards, making it harder for you to survive
              or frankly even impossible. To give you a bit of a fighting
              chance, every garbage-line does have one hole in it, so you can
              complete them and delete these lines as well.
            </p>
            <div>
              <h4 className="italic">Sending Garbage</h4>
              <p>
                Basically there are two ways to send garbagelines to other
                players. One is by deleting more than one of your own lines with
                a single piece placement. With the green single-line piece you
                can delete up to 4 lines with a single piece. Now 3 lines is not
                very threatening, is it? That&apos;s why there is another way to
                send more lines to an opponent, a lot more. Think combos.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="italic">Combos</h4>
              <p>
                Combos are what Cultris II is all about. Every time you delete a
                line you will see that you get some time on your combo-timer. If
                you delete lines again before the time runs out your
                combo-counter will rise. If you delete more than one line
                you&apos;ll get more time. The combo-counter determines how many
                lines you send to your opponent in addition to the normal
                amount. The more lines you delete and the higher your
                combo-counter is, the more you&apos;ll send. The amount of
                additional lines you get changes with the duration of the
                current round. The longer a round goes on the more lines will be
                sent, to ensure the round will end, one way or another!
              </p>
              <p>
                The amount of additional time you get on your combo-timer
                depends on your current combo-counter and on the amount of lines
                you cleared with the last piece. An example: If your
                combo-counter is currently 0 and you clear 4 lines at once,
                you&apos;ll get 4 times the amount of additional time than
                you&apos;d get from clearing just 1 line. The additional time
                you get will get considerably smaller the higher your
                combo-counter gets. So start big and stay fast and you just may
                have a chance!
              </p>
              <p>
                And before you ask: No, you will not get any additional bonus
                lines or time for stupid, unnatural T-spins!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="italic">Targeting</h4>
              <p>
                You can&apos;t choose your target yourself. Your sent lines will
                be distributed evenly among all other players. Fair is fair.
                Remaining lines will be distributed randomly among the players.
                If you are in a room with 7 other players and you send 17 lines,
                each of the opponents will get 2 lines (14) and 3 random players
                will each get an additional line.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="italic">How to Block</h4>
              <p>
                You probably noticed during a game or just by reading this
                manual that the amount of garbage you receive can be a lot more
                than just the 18 lines you have on your playfield, especially in
                a 1 on 1 game. But that doesn&apos;t mean that you can&apos;t do
                anything against this. You are able to block incoming lines
                before they even enter your playfield. Below your Combodisplay
                is a number. This number tells you the amount of pending lines.
                Garbagelines sent to you don&apos;t enter your field immediately
                but are delayed for a small amount of time, after that, lines
                will be inserted continuously during play. Whenever you drop a
                piece and clear at least one line, the insertion of the lines
                stops again and the amount of lines you would have sent to your
                opponents will be removed from your pending lines, any amount of
                sent lines that exceeds pending lines will be sent normally.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Swiss Cheese Mode</h3>
            <p>
              This is basically a drill type of gameplay, but we are Swiss, the
              garbage is yellow and it has holes: THAT&apos;S CHEESE!
            </p>
            <p>
              The first player to eat all the cheese (clears all the yellow
              garbage) wins. You can&apos;t send any lines to your opponents and
              you won&apos;t receive additional garbage, you will still die
              though if you reach the top... so don&apos;t!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Survivor Mode</h3>
            <p>
              Just survive! No lines will be sent between players, but the game
              will insert garbage-lines automatically into all playfields. As
              the game progresses the garbage-lines will be inserted with
              increasing speed.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
