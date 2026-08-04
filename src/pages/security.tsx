import Access from "@/components/routes/security/Access";
import ContactUs from "@/components/routes/security/ContactUs";
import DataResidency from "@/components/routes/security/DataResidency";
import Encryption from "@/components/routes/security/Encryption";
import RegulatoryPosture from "@/components/routes/security/RegulatoryPosture";
import SecurityHero from "@/components/routes/security/SecurityHero";
import SecuritySummary from "@/components/routes/security/SecuritySummary";
import MetaProps from "@/components/shared/molecules/MetaProps";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import React from "react";

const security = () => {
  return (
    <PageTemplate
      gradientProps={{ variant: "yellow", className: "md:h-[730px]" }}
      classNames={{ wrapper: "space-y-12 md:space-y-20 mb-20 md:mb-40" }}
    >
      <MetaProps
        title="AI Knowledge Base Software | Eusate"
        description="Create a smart knowledge base that empowers Sate to answer customer questions accurately and consistently."
        path="/knowledge-base"
        jsonLdData={{ type: "software" }}
      />
      <SecurityHero />
      <SecuritySummary />
      <DataResidency />
      <Encryption />
      <Access />
      <RegulatoryPosture />
      <ContactUs />
    </PageTemplate>
  );
};

export default security;
