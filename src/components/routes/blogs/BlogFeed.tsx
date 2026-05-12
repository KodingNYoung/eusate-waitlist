import { BlogPost } from "@/utils/dummy";
import { BlogCard } from "@/components/routes/blogs/BlogCard";
import AppPagination from "@/components/shared/molecules/Pagination";
import { PageQueryKey } from "@/utils/enum";
import { PageSection } from "@/components/shared/organisms/PageTemplate";
import { useQueryParams } from "@/utils/hooks";

export const BlogFeed = () => {
  const { set } = useQueryParams();
  return (
    <PageSection
      classNames={{
        base: "flex flex-col justify-center",
        container: "!gap-y-0",
      }}
    >
      <div className="grid gap-y-10">
        {/* SPOTLIGHT */}
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

        <div className="flex w-full justify-center md:justify-around xl:justify-between flex-wrap gap-8">
          {BlogPost.map(
            ({ id, imgSrc, title, summary, readingSpan, timestamp }) => (
              <BlogCard
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

      <div className="md:mt-20">
        <AppPagination
          page={1}
          total={10}
          onChange={(page) => set(PageQueryKey.PAGE, page)}
        />
      </div>
    </PageSection>
  );
};
