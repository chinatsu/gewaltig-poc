import { Inter } from "next/font/google";
import AboutContent from "./content.mdx"
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GEWALTIG entertainment - About",
    description: "GEWALTIG entertainment",
  };


export default async function C1() {
  return (
    <main
      className={`flex min-h-screen flex-col p-8 items-center ${inter.className}`}
    >
      <div className="w-full xl:max-w-6xl prose prose-slate dark:prose-invert">
        <AboutContent />
      </div>
    </main>
  );
}
