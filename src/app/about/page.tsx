import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about RandomHub's free spin wheel, name dice, and lottery picker.",
};

export default function AboutPage() {
  return (
    <InfoPage title="About RandomHub" summary="Simple tools for making the little decisions a little more fun.">
      <h2>Pick a name. Let chance decide.</h2>
      <p>RandomHub brings a name wheel, player dice, and a lottery draw together in one free, easy-to-use place.</p>
      <p>No account or setup is needed. Add your options, choose a tool, and get a random result.</p>
    </InfoPage>
  );
}