import { ArrowRightIcon } from "@/assets/icons";
import { DevActionCard } from "@/components/routes/devspace/DevActionCard";
import { KBFeatures } from "@/components/routes/knowledge-base/KBFeatures";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";
import { KB_HIGHLIGHTS } from "@/utils/constants";
import Image from "next/image";

const KnowledgeBasePage = () => {
  return (
    <PageTemplate hideGradient>
      <div className="space-y-8">
        <PageHeader
          classNames={{
            title: "text-white",
            description: "text-white leading-[180%]",
            wrapper: "gap-20",
            container:
              "bg-[url(/images/knowledge-base-bg.webp)] flex items-center justify-center",
          }}
          chipLabel="Knowledge base"
          title="The brain behind every conversation."
          description="Upload once. Answer everywhere. Your knowledge base trains SATE to deliver precise, on-brand responses while keeping your team aligned on every detail."
          actionBtn={
            <Button
              variant="outlined"
              className="px-12 py-4"
              endContent={
                <span className="stroke-black">{ArrowRightIcon}</span>
              }
            >
              Get started
            </Button>
          }
          extraContent={
            <Image
              src="/images/kb-hero.webp"
              width={400}
              height={400}
              alt="kb-hero-img"
            />
          }
        />

        <section className="container max-w-[1400px] space-y-8">
          <div className="flex justify-around items-center">
            <div>
              <Typography
                as="h2"
                variant="bold-3xl"
                className="bg-[url(/images/kb-text-bg.webp)] bg-cover bg-center bg-clip-text text-transparent"
              >
                One source
              </Typography>
              <Typography as="span" variant="bold-3xl">
                of truth
              </Typography>
            </div>
            <div className="bg-gray-50 flex p-[4px] gap-[4px] rounded-lg">
              {
                KB_HIGHLIGHTS.slice(0, 2).map(({ id, title, description }) =>

                  <DevActionCard
                    key={id}
                    classNames={{ root: "max-w-[408px]" }}
                    title={title}
                    description={description}
                  />
                )
              }
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="bg-gray-50 flex p-[4px] gap-[4px] rounded-lg">
              {
                KB_HIGHLIGHTS.slice(2).map(({ id, title, description }) =>

                  <DevActionCard
                    key={id}
                    classNames={{ root: "max-w-[408px]" }}
                    title={title}
                    description={description}
                  />
                )
              }
            </div>
            <div>
              <Typography
                as="h2"
                variant="bold-3xl"
                className="bg-[url(/images/kb-text-bg.webp)] bg-cover bg-center bg-clip-text text-transparent"
              >
                Infinite
              </Typography>
              <Typography as="span" variant="bold-3xl">
                applications.
              </Typography>
            </div>
          </div>
        </section>

        <KBFeatures />

      </div>
    </PageTemplate>
  );
};

export default KnowledgeBasePage;
