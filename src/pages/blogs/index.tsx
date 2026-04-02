import GradientBackground from "@/components/shared/atoms/GradientBackground";
import Input from "@/components/shared/molecules/Input";
import Navbar from "@/components/shared/organisms/navbar";
import { PageHeader } from "@/components/shared/organisms/PageHeader";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <GradientBackground variant="gray" className="absolute" />
      <main className="pt-[88px] flex justify-center">
        <div className="container flex flex-col gap-4 items-center mx-auto max-w-[1080px] py-20">
          <PageHeader position="center" chipLabel="Our Blogs" title="Get news & insights from us." />
          <Input name="search" type="search" className="w-full" />
        </div>

      </main>
    </div>
  )
}

export default BlogPage;
