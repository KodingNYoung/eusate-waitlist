import {
  PageTemplate,
  SectionTemplate,
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
        <SectionTemplate className="py-24 px-5">
          <BackButton />
          <Post />
        </SectionTemplate>
      </PageTemplate>
    </div>
  );
};

export default BlogPost;
