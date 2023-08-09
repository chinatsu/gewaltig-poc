import { Inter } from "next/font/google";
import C1Content from "./content.mdx";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GEWALTIG entertainment - Cultris I",
    description: "GEWALTIG entertainment",
  };


export default async function C1() {
  return (
    <main
      className={`flex-grow flex flex-col p-8 items-center ${inter.className}`}
    >
      <div className="w-full xl:max-w-6xl prose prose-slate dark:prose-invert">
        <C1Content />
      </div>
    </main>
  );
}
