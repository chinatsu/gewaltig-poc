import { Inter } from "next/font/google";
import IndexContent from './index.mdx'

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-8 items-center ${inter.className}`}
    >
      <div className="w-full md:max-w-3xl prose prose-slate dark:prose-invert">
        <IndexContent />
      </div>
    </main>
  );
}