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
    <SectionTemplate classNames={{ base: "py-20", wrapper: "space-y-20" }}>
      <SubHeader
        orientation="horizontal"
        chipLabel="Our blog"
        title="Get updated new & insights"
        classNames={{
          titleContainer: "w-full space-y-4 md:w-[45%]",
          root: "w-full flex flex-col md:flex-row space-y-0 md:space-y-0 items-start md:items-end md:justify-between",
        }}
        cta={
          <Link href={ROUTES.BLOGS} className="hidden md:block">
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
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-start 2xl:justify-between gap-8 w-auto">
          {BlogPost?.slice(0, 3)?.map(
            ({ id, imgSrc, title, summary, readingSpan, timestamp }) => (
              <BlogCard
                variant="inline"
                classNames={{ container: "self-start items-start " }}
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
      </div>

      <Button
        size="sm"
        className="px-6 py-3 md:hidden w-full"
        endContent={<span className="stroke-white">{ArrowRightIcon}</span>}
      >
        Read our blogs
      </Button>
    </SectionTemplate>
  );
};
