import {
  PageTemplate,
  SectionTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { BlogPost } from "@/utils/dummy";
import { SearchIcon } from "@/assets/icons";
import { BlogCard } from "@/components/routes/blogs/BlogCard";
import Input from "@/components/shared/molecules/Input";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import AppPagination from "@/components/shared/molecules/Pagination";
import { useQueryParams } from "@/utils/hooks";
import { PageQueryKey } from "@/utils/enum";

const BlogPage = () => {
  const { set } = useQueryParams();
  return (
    <div>
      <PageTemplate
        gradientVariant="gray"
        classNames={{ wrapper: "md:pt-[100px] px-3 md:px-0" }}
      >
        <header className="md:container flex flex-col items-center justify-center w-full lg:w-[60%] 2xl:w-[50%] py-8">
          <PageHeader
            position="center"
            chipLabel="Our Blogs"
            title="Get news & insights from us."
            classNames={{ container: "md:h-auto" }}
          />
          <Input
            name="search"
            type="search"
            placeholder="Search blogs"
            className="flex-1 w-full"
            classNames={{ root: "w-full border-none" }}
            startComponent={<span>{SearchIcon}</span>}
          />
        </header>

        <SectionTemplate className="flex flex-col justify-center md:py-20 gap-y-20">
          {/* SPOTLIGHT */}
          <BlogCard
            spotlight
            id={BlogPost[0].id}
            imgSrc={BlogPost[0].imgSrc}
            title={BlogPost[0].title}
            summary={BlogPost[0].summary}
            readingSpan={BlogPost[0].readingSpan}
            timestamp={BlogPost[0].timestamp}
          />

          <div className="flex w-full justify-start md:justify-between flex-wrap gap-8">
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
          <div className="mt-10">
            <AppPagination
              page={1}
              total={10}
              onChange={(page) => set(PageQueryKey.PAGE, page)}
            />
          </div>
        </SectionTemplate>
      </PageTemplate>
    </div>
  );
};

export default BlogPage;
