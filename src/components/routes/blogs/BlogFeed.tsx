import { BlogCard } from "@/components/routes/blogs/BlogCard";
import AppPagination from "@/components/shared/molecules/Pagination";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { staggerContainer } from "@/components/shared/organisms/AnimatedBlock/variants";
import { BLOG_POST } from "@/utils/constants";
import { useState } from "react";

const BLOGS_PER_PAGE = 9;

export const BlogFeed = () => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * BLOGS_PER_PAGE;
  const end = start + BLOGS_PER_PAGE;
  const noOfPages = Math.ceil(BLOG_POST.length / BLOGS_PER_PAGE);
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
          <div className="hidden w-full md:flex">
            <BlogCard
              spotlight
              id={BLOG_POST[0].id}
              imgSrc={BLOG_POST[0].imgSrc}
              title={BLOG_POST[0].title}
              summary={BLOG_POST[0].summary}
              readingSpan={BLOG_POST[0].readingSpan}
              timestamp={BLOG_POST[0].timestamp}
            />
          </div>
        </AnimatedBlock>

        <AnimatedBlock variants={staggerContainer}>
          <div className="flex w-fit flex-wrap gap-8">
            {BLOG_POST.slice(start, end).map(
              ({ id, imgSrc, title, summary, readingSpan, timestamp }) => (
                <BlogCard
                  key={id}
                  id={id}
                  imgSrc={imgSrc}
                  title={title}
                  summary={summary}
                  readingSpan={readingSpan}
                  timestamp={timestamp}
                  classNames={{ container: "md:max-w-[363px]" }}
                />
              ),
            )}
          </div>
        </AnimatedBlock>
      </div>

      {noOfPages > 1 && (
        <AppPagination page={page} total={noOfPages} onChange={setPage} />
      )}
    </PageSection>
  );
};
