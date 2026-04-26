import { ArrowRightIcon } from "@/assets/icons";
import Button from "@/components/shared/molecules/Button";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { BlogPost } from "@/utils/dummy";
import { BlogCard } from "../blogs/BlogCard";
import { SectionTemplate } from "@/components/shared/organisms/navbar/SectionTemplate";

export const Blog = () => {
  return (
    <SectionTemplate classNames={{ wrapper: "space-y-12" }}>
      <SubHeader
        orientation="horizontal"
        chipLabel="Our blog"
        title="Get updateed new & insights"
        cta={
          <Button size="sm" className="px-6 py-3" endContent={<span className="stroke-white">{ArrowRightIcon}</span>}>
            Read our blogs
          </Button>
        }
      />

      <div className="flex gap-8">
        {BlogPost.map(
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
