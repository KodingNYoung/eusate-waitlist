import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { Post } from "@/components/routes/blogs/Post";
import { BackButton } from "@/components/routes/blogs/BackButton";

const BlogPost = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="gray"
        classNames={{ wrapper: "md:pt-[100px] " }}
      >
        <PageSection
          classNames={{ base: "py-20 md:py-24 px-5", container: "gap-y-10" }}
        >
          <BackButton />
          <Post />
        </PageSection>
      </PageTemplate>
    </div>
  );
};

export default BlogPost;
