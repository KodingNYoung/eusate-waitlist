import {
  PageSection,
  PageTemplate,
} from "@/components/shared/organisms/PageTemplate";
import { Post } from "@/components/routes/blogs/Post";
import { BackButton } from "@/components/routes/blogs/BackButton";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import { fadeVariants } from "@/components/shared/organisms/AnimatedBlock/variants";
import MetaProps from "@/components/shared/molecules/MetaProps";
import { BLOG_POST } from "@/utils/constants";
import { Blog } from "@/utils/types";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  post: Blog;
};

const BlogPost = ({ post }: Props) => {
  return (
    <div>
      <MetaProps
        title={`${post.title} | Eusate Blog`}
        description={post.summary}
        path={`/blogs/${post.id}`}
        jsonLdData={{ type: "software" }}
      />
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
            <Post post={post} />
          </PageSection>
        </AnimatedBlock>
      </PageTemplate>
    </div>
  );
};

export default BlogPost;

// FE-constants-for-now: BLOG_POST is a local array, so every id is known at
// build time and every post can be pre-rendered up front.
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BLOG_POST.map((post) => ({ params: { id: post.id } })),
    // TODO(backend): once posts come from an API, switch to `fallback: "blocking"`
    // (ISR) so posts published after the last build still render on first
    // request instead of requiring a full site rebuild to appear.
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = BLOG_POST.find((blog) => blog.id === params?.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    // TODO(backend): once posts are fetched from an API instead of this
    // constant, add `revalidate: <seconds>` here (ISR) so edits made on the
    // backend propagate without a full redeploy.
  };
};
