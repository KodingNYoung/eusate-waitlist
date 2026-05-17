import { BlogPost } from "@/utils/dummy";
import { BlogCard } from "@/components/routes/blogs/BlogCard";
import AppPagination from "@/components/shared/molecules/Pagination";
import { PageQueryKey } from "@/utils/enum";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { useQueryParams } from "@/utils/hooks";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";

export const BlogFeed = () => {
  const { set } = useQueryParams();
  return (
    <PageSection
      classNames={{
        base: "flex flex-col justify-center",
        container: "!gap-y-10 md:!gap-y-20",
      }}
    >
      <div className="grid gap-y-10">
        {/* SPOTLIGHT */}
        <AnimatedBlock>
          <div className="flex w-full">
            <BlogCard
              spotlight
              id={BlogPost[0].id}
              imgSrc={BlogPost[0].imgSrc}
              title={BlogPost[0].title}
              summary={BlogPost[0].summary}
              readingSpan={BlogPost[0].readingSpan}
              timestamp={BlogPost[0].timestamp}
            />
          </div>
        </AnimatedBlock>

        <AnimatedBlock variants={staggerContainer}>
          <div className="flex w-full justify-center md:justify-around xl:justify-between flex-wrap gap-8">
            {BlogPost.map(
              ({ id, imgSrc, title, summary, readingSpan, timestamp }, idx) => (
                <BlogCard
                  key={id}
                  id={id}
                  idx={idx}
                  imgSrc={imgSrc}
                  title={title}
                  summary={summary}
                  readingSpan={readingSpan}
                  timestamp={timestamp}
                />
              ),
            )}
          </div>
        </AnimatedBlock>
      </div>

      <AppPagination
        page={1}
        total={10}
        onChange={(page) => set(PageQueryKey.PAGE, page)}
      />
    </PageSection>
  );
};
