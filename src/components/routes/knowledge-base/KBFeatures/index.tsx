import { KBFeaturesDesktop } from "./KBFeaturesDesktop";
import { KBFeaturesMobile } from "./KBFeaturesMobile";

export const KBFeatures = () => {
  return (
    <>
      <KBFeaturesMobile />
      <KBFeaturesDesktop />
    </>
  );
};
