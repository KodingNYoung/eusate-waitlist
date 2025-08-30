import { ArrowRightIcon } from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import Navbar from "@/components/shared/organisms/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <main className="h-screen bg-[url(/images/404-swatch.webp)] bg-center bg-no-repeat bg-cover">
      <Navbar logoType="full-gradient-black" />
      <section className="h-full flex flex-col items-center justify-center gap-5 container">
        <Image
          src="/images/404-image.webp"
          width={1360}
          height={424}
          alt="404 image"
        />
        <Typography className="text-bold-xl text-gray-900">
          Oops! Page not found
        </Typography>
        <Link href="/" className="group/btn">
          <Button
            classNames={{ root: "py-3 px-7 w-[180px] !justify-start", label: "text-semibold-sm" }}
            endContent={
              <span className="stroke-white inline-block ml-0 group-hover/btn:ml-2 transition-all duration-150">
                {ArrowRightIcon}
              </span>
            }
          >
            Back to home
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default Custom404;
