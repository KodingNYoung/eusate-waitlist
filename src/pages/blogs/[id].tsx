import { Post } from "@/components/routes/blogs/Post";
import { BackButton } from "@/components/routes/blogs/BackButton";
import { PageTemplate } from "@/components/shared/organisms/PageTemplate";

const BlogPost = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="gray"
        classNames={{ wrapper: "md:pt-[100px] pt-20 space-y-8" }}
      >
        <BackButton />
        <Post />
      </PageTemplate>
    </div>
  );
};

export default BlogPost;
