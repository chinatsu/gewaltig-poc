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
      <body>{children}</body>
    </html>
  );
}
