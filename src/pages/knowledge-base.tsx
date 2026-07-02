import { KBFeatures } from "@/components/routes/knowledge-base/KBFeatures";
import { KBFunctionalities } from "@/components/routes/knowledge-base/KBFunctionalities";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import KBHero from "@/components/routes/knowledge-base/KBHero";
import MetaProps from "@/components/shared/molecules/MetaProps";

const KnowledgeBasePage = () => {
  return (
    <PageTemplate
      hideGradient
      classNames={{ wrapper: "space-y-12 md:space-y-24" }}
    >
      <MetaProps
        title="AI Knowledge Base Software | Eusate"
        description="Create a smart knowledge base that empowers Sate to answer customer questions accurately and consistently."
        path="/knowledge-base"
        jsonLdData={{ type: "software" }}
      />
      <KBHero />
      <KBFunctionalities />
      <KBFeatures />
    </PageTemplate>
  );
};

export default KnowledgeBasePage;
