import { SearchIcon } from "@/assets/icons";
import { BlogCard } from "@/components/routes/blogs/BlogCard";
import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Input from "@/components/shared/molecules/Input";
import Navbar from "@/components/shared/organisms/navbar";
import { PageHeader } from "@/components/shared/organisms/PageHeader";
import { BlogPost } from "@/utils/dummy";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="gray" className="absolute" />
      <main className="pt-[88px] flex flex-col items-center">
        <header className="container flex flex-col gap-4 items-center w-full max-w-[1080px] py-20">
          <PageHeader
            position="center"
            chipLabel="Our Blogs"
            title="Get news & insights from us."
          />
          <Input
            name="search"
            type="search"
            placeholder="Search blogs"
            className="flex-1 w-full"
            startComponent={<span>{SearchIcon}</span>}
          />
        </header>
        <section className="space-y-20">
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

          <div className="flex gap-8">
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
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
