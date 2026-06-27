import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { Post } from "@/components/routes/blogs/Post";
import { BackButton } from "@/components/routes/blogs/BackButton";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";

const BlogPost = () => {
  return (
    <div>
      <PageTemplate
        gradientVariant="gray"
        classNames={{ wrapper: "md:pt-[100px] " }}
      >
        <AnimatedBlock variants={fadeVariants} duration={2}>
          <PageSection
            classNames={{
              base: "py-20 md:py-24 px-5",
              container: "gap-y-10 !max-w-[1080px]",
            }}
          >
            <BackButton />
            <Post />
          </PageSection>
        </AnimatedBlock>
      </PageTemplate>
    </div>
  );
};

export default BlogPost;
