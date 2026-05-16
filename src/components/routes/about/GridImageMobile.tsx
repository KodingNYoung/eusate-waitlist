import Image from "next/image";

export const GridImageMobile = () => {
  return (
    <div className="flex md:hidden flex-col col-span-2 gap-4 h-96 px-5 w-full">
      <div className="relative h-full w-full">
        <Image
          src="/about/images/about-img-2.webp"
          alt="startup"
          fill
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="flex gap-4 h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src="/about/images/about-img-1.webp"
            alt="success"
            fill
            className="rounded-3xl object-cover object-left"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/about/images/about-img-3.webp"
            alt="success"
            fill
            className="rounded-3xl object-cover object-right"
          />
        </div>
      </div>
    </div>
  );
};
