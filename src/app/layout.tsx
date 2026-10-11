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
  applicationName: "Random Hub",
  title: {
    default: "Free Spinner - Free Name Picker, Spin Wheel & Dice Roller",
    template: "%s | Random Hub",
  },
  description:
    "Pick a random name in seconds. Spin a customizable name wheel, roll a name-assigned dice, or draw a lottery winner for classrooms, games, and giveaways.",
 
  verification: {
  google: "izUUJnwgxDvS7f1bjy3eFPg6Cp-VL33vVzh6OPNM5fM",
},
  keywords: [
    "random name picker",
    "spin the wheel",
    "name wheel",
    "random picker",
    "online dice roller",
    "lottery name picker",
    "online spinner",
    "name spinner",
    "giveaway winner picker",
  ],
  openGraph: {
    title: "Random Hub - Pick a Name, Roll the Dice, Make It Random",
    description:
      "A free name picker with a customizable spin wheel, player dice roller, and quick lottery draw.",
    siteName: "Random Hub",
    type: "website",
    url: "https://randomhub-ten.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Random Hub - Free Random Name Picker",
    description:
      "Spin a name wheel, roll for a player, or draw a random winner with RandomHub.",
  },
  robots: { index: true, follow: true },
 icons: {
  icon: [
    { url: "/icon.png", type: "image/png" },
  ],
  shortcut: "/icon.png",
  apple: "/icon.png",
},


};

 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Google Structured Data for Site Name and Logo
  const jsonLd = {
    "@type": "WebSite",
    "name": "Random Hub",
    "alternateName": ["RandomHub"],
    "url": "https://randomhub-ten.vercel.app",
    "logo": "https://randomhub-ten.vercel.app/icon.png"// Tells Google what to use as a logo
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Injecting Schema directly into head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}