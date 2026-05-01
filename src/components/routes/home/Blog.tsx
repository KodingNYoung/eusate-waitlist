import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { BlogPost } from "@/utils/dummy";
import { BlogCard } from "../blogs/BlogCard";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";
import Link from "next/link";
import { ROUTES } from "@/utils/constants";

export const Blog = () => {
  return (
    <SectionTemplate classNames={{ wrapper: "space-y-12" }}>
      <SubHeader
        orientation="horizontal"
        chipLabel="Our blog"
        title="Get updateed new & insights"
        classNames={{
          titleContainer: "w-full space-y-4 md:w-[45%]",
          root: "w-full !md:flex-row !flex-col space-y-6 items-start md:items-end justify-between",
        }}
        cta={
          <Link href={ROUTES.BLOGS}>
            <Button
              size="sm"
              className="px-6 py-3"
              endContent={
                <span className="stroke-white">{ArrowRightIcon}</span>
              }
            >
              Read our blogs
            </Button>
          </Link>
        }
      />
      <div className="flex flex-wrap justify-between gap-8">
        {BlogPost?.slice(0, 3)?.map(
          ({ id, imgSrc, title, summary, readingSpan, timestamp }) => (
            <BlogCard
              variant="inline"
              key={id}
              id={id}
              imgSrc={imgSrc}
              title={title}
              summary={summary}
              readingSpan={readingSpan}
              timestamp={timestamp}
            />
          ),
        )}
      </div>
    </SectionTemplate>
  );
};
