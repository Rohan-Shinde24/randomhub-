import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";
import { SpinCountDisplay } from "@/components/spin-count-display";

export const metadata: Metadata = {
  title: "Spin Count",
  description: "See how many times the RandomHub wheel has been spun in this browser.",
};

export default function CountPage() {
  return (
    <InfoPage title="Spin count" summary="A running total of wheel spins recorded on this browser.">
      <SpinCountDisplay />
    </InfoPage>
  );
}