import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://randomhub-ten.vercel.app"),
  title: {
    default: "RandomHub - Free Name Picker, Spin Wheel & Dice Roller",
    template: "%s | RandomHub",
  },
  description:
    "Pick a random name in seconds. Spin a customizable name wheel, roll a name-assigned dice, or draw a lottery winner for classrooms, games, and giveaways.",
  keywords: [
    "random name picker",
    "spin the wheel",
    "name wheel",
    "random picker",
    "online dice roller",
    "lottery name picker",
    "giveaway winner picker",
  ],
  openGraph: {
    title: "RandomHub - Pick a Name, Roll the Dice, Make It Random",
    description:
      "A free name picker with a customizable spin wheel, player dice roller, and quick lottery draw.",
    siteName: "RandomHub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RandomHub - Free Random Name Picker",
    description:
      "Spin a name wheel, roll for a player, or draw a random winner with RandomHub.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
