import Typography from "@/components/shared/atoms/Typography";
import { BlogPost } from "@/utils/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = useMemo(
    () => BlogPost.find((blog) => id && blog.id === id),
    [id],
  );

  return post ? (
    <div className="grid gap-y-8">
      <div className="relative w-full h-[400px]">
        <Image
          src={post.imgSrc}
          alt={post.title}
          width={330}
          height={293}
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
  ) : null;
};
