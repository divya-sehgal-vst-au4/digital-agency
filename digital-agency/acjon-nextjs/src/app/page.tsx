import { Metadata } from "next";
import DigitalAgencyLayout from "./(homes)/digital-agency/layout";
import DigitalAgencyHomeMain from "./(homes)/digital-agency/DigitalAgencyHomeMain";

export const metadata: Metadata = {
  title: "Cognitive Monks - Modern growth marketing agency",
};

/** `/` — swap `DigitalAgencyHomeMain` / layout imports here to use another home template later. */
export default function RootPage() {
  return (
    <DigitalAgencyLayout>
      <DigitalAgencyHomeMain />
    </DigitalAgencyLayout>
  );
}
