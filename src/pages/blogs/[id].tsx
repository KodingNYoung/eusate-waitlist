import { Post } from "@/components/routes/blogs/Post";
import Navbar from "@/components/shared/organisms/navbar";
import { BackButton } from "@/components/routes/blogs/BackButton";
import GradientBackground from "@/components/shared/atoms/GradientBackground";

const BlogPost = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="gray" />
      <main className="pt-[88px]">
        <div className="container pt-20 space-y-8">
          <BackButton />
          <Post />
        </div>
      </main>
    </div>
  )
}

export default BlogPost;
