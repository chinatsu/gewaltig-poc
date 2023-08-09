import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { Metadata } from "next";
import { PropsWithChildren, ReactElement } from "react";

export const metadata: Metadata = {
  title: "Cultris II - Free Multiplayer Tetris",
  description: "Home of Cultris II",

};

export default async function RootLayout({
  children,
}: PropsWithChildren): Promise<ReactElement> {
  return (
    <html lang="en">
      <body>
        <div className="dark:bg-slate-900 min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
