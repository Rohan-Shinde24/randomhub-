import type { Metadata } from "next";
import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RandomHub handles names and information while you use its random picker tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <InfoPage title="Privacy Policy" summary="Your list stays in your browser while you use RandomHub.">
      <h2>Names you enter</h2>
      <p>Names are held in the page while the tool is open. RandomHub does not send or save your list. Reloading or leaving the page clears it.</p>
      <h2>Ads and analytics</h2>
      <p>Ad spaces are reserved in the layout, but no advertising or analytics services are currently connected.</p>
    </InfoPage>
  );
}