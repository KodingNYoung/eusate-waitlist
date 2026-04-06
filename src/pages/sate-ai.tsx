import { SateAction } from "@/components/routes/sate-ai/SateAction";
import Typography from "@/components/shared/atoms/Typography";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const SateAiPage = () => {
  return (
    <PageTemplate hideGradient>
      <main className="mx-4">
        <PageHeader
          chipLabel="Sate Ai"
          orientation="horizontal"
          classNames={{
            container: "bg-[url(/images/sate-ai-bg.webp)] flex items-end justify-center",
            root: "w-[80%]",
            title: "text-white text-bold-5xl w-[70%]",
            description: "text-white w-[50%]",
          }}
          title="AI that understans context. Recognizes emotion. Takes action."
          description="More than a chatbot, SATE understands complex questions and resolves issues effectively. It handles 80% of support queries with emotional intelligence, making conversations feel natural."
        />
        <section className="h-[590px] flex justify-center items-center">
          <Typography
            variant="bold-6xl"
            className="text-center w-[30%] text-gray-200"
          >
            Build different from every chatbot you&apos;ve tried
          </Typography>
        </section>
        <section className="bg-gold-50 px-40 py-20 flex justify-center">
          <SateAction
            header={
              <PageHeader
                variant="sub"
                classNames={{
                  title: "text-[32px]",
                  titleContainer: "space-y-1",
                }}
                chipLabel="Sate in Action"
                title="Sate is actively engaged in various activities"
              />
            }
          />
        </section>
      </main>
    </PageTemplate>
  );
};

export default SateAiPage;
