import Typography from "@/components/shared/atoms/Typography";
import { KB_HIGHLIGHTS } from "@/utils/constants";
import { DevActionCard } from "../devspace/DevActionCard";
import { PageSection } from "@/components/shared/organisms/PageTemplate";

export const KBFunctionalities = () => {
  return (
    <PageSection classNames={{ base: "px-5", container: "grid gap-y-22" }}>
      <div className="flex flex-wrap justify-start gap-y-10 md:justify-around items-center">
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
        <div className="bg-gray-50 flex flex-wrap p-[4px] gap-[4px] rounded-lg">
          {KB_HIGHLIGHTS.slice(0, 2).map(({ id, title, description }) => (
            <DevActionCard
              key={id}
              classNames={{ root: "md:max-w-[408px] max-w-full" }}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start gap-y-10 md:justify-around">
        <div className="bg-gray-50 order-2 md:order-1 flex flex-wrap p-[4px] gap-[4px] rounded-lg">
          {KB_HIGHLIGHTS.slice(2).map(({ id, title, description }) => (
            <DevActionCard
              key={id}
              classNames={{ root: "md:max-w-[408px] max-w-full" }}
              title={title}
              description={description}
            />
          ))}
        </div>
        <div className="order-1 md:order-2 ">
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
    </PageSection>
  );
};
