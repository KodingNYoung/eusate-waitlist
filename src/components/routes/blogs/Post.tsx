import Typography from "@/components/shared/atoms/Typography";
import { Blog } from "@/utils/types";
import Image from "next/image";

type Props = {
  post: Blog;
};

// `post` now comes from getStaticProps in pages/blogs/[id].tsx (so its title/
// summary can be baked into the static HTML for SEO) instead of being looked
// up here from router.query. This contract stays the same once posts move to
// the backend — only the data-fetching in getStaticProps needs to change.
export const Post = ({ post }: Props) => {
  return (
    <div className="grid gap-y-8">
      <div className="relative w-full aspect-[1032/580]">
        <Image
          src={post.imgSrc}
          alt={post.title}
          width={1032}
          height={580}
          className="w-full h-full rounded-x20 object-cover"
        />
      </div>
      <Typography as="h1" className="text-bold-2xl md:text-bold-4xl">
        {post.title}
      </Typography>
      <Typography
        as="p"
        className="text-regular-base md:text-regular-xl text-gray-700 leading-[180%]"
      >
        {post.content.introduction}
      </Typography>

      <section className="space-y-6">
        {post.content.subheaders.map(({ id, title, content }) => (
          <div key={id} className="space-y-6">
            <Typography as="h2" className="text-bold-xl md:text-semibold-3xl">
              {title}
            </Typography>
            <Typography
              as="p"
              className="text-regular-base md:text-regular-xl text-gray-700 leading-[180%]"
            >
              {content}
            </Typography>
          </div>
        ))}
      </section>
    </div>
  );
};
