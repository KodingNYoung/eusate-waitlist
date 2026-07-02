import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { SearchIcon } from "@/assets/icons";
import Input from "@/components/shared/molecules/Input";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/routes/blogs/BlogCard";
import { BlogFeed } from "@/components/routes/blogs/BlogFeed";
import Typography from "@/components/shared/atoms/Typography";
import { PageHero } from "@/components/shared/organisms/PageHero";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import { BLOG_POST } from "@/utils/constants";
import MetaProps from "@/components/shared/molecules/MetaProps";

const BlogPage = () => {
  const [search, setSearch] = useState("");

  const searchedBlogs = useMemo(
    () =>
      BLOG_POST.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div>
      <MetaProps
        title="Customer Support & AI Insights | Eusate Blog"
        description="Explore expert articles on AI customer support, automation, customer experience, helpdesk best practices, and business growth."
        path="/blogs"
        jsonLdData={{ type: "software" }}
      />
      <PageTemplate
        gradientVariant="gray"
        classNames={{
          wrapper: "grid gap-y-8 md:gap-y-20 mt-20 md:mt-24 pb-20",
        }}
      >
        <AnimatedBlock variants={fadeVariants}>
          <PageHero
            classNames={{
              container: "flex items-center justify-center w-full",
              wrapper:
                "w-full flex flex-col gap-y-8 lg:w-[60%] 2xl:w-[50%] px-5",
            }}
          >
            <PageHeader
              position="center"
              chipLabel="Our Blogs"
              title="Get news & insights from us."
              classNames={{
                container: "md:h-auto",
                titleContainer: "gap-y-10 justify-center",
                title:
                  "w-full md:w-[80%] text-center md:mx-auto leading-[120%]",
              }}
            />
            <Input
              name="search"
              type="search"
              placeholder="Search blogs"
              onChange={(e) => setSearch(e.currentTarget.value)}
              className="flex-1 w-full"
              classNames={{ root: "w-full border-none" }}
              startComponent={<span>{SearchIcon}</span>}
            />
          </PageHero>
        </AnimatedBlock>

        <PageSection classNames={{ wrapper: "px-5" }}>
          {search.length ? (
            searchedBlogs.length ? (
              <div className="flex w-full justify-start md:justify-start flex-wrap gap-8">
                {searchedBlogs.map(
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
            ) : (
              <Typography className="text-center">No blog found</Typography>
            )
          ) : (
            <BlogFeed />
          )}
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default BlogPage;
