import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using RandomHub's free random name picker and decision tools.",
};

export default function TermsPage() {
  return (
    <InfoPage title="Terms of Use" summary="A few straightforward terms for using RandomHub.">
      <h2>Using the tools</h2>
      <p>RandomHub is provided free of charge for casual decisions, games, classroom activities, and giveaways. You are responsible for how you use the results.</p>
      <h2>Random results</h2>
      <p>Results are generated in your browser for convenience. They are not cryptographic or certified random draws, and should not be used where a regulated or independently verifiable selection is required.</p>
      <h2>Availability</h2>
      <p>The tools are provided as is and may change or be unavailable from time to time.</p>
    </InfoPage>
  );
}