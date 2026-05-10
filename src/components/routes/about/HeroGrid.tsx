import Typography from "@/components/shared/atoms/Typography";
import Image from "next/image";

export default function GridLayout() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-5 gap-4 px-4 md:h-[500px]">
      {/* Left column */}
      <div className="hidden md:flex flex-row md:flex-col gap-4 h-48 md:h-auto">
        <div className="bg-black text-white rounded-3xl flex items-end p-8 relative h-full w-full">
          <div className="z-10">
            <Typography as="h2" variant="bold-3xl">
              10+
            </Typography>
            <Typography as="p" variant="medium-lg" className="text-white/70">
              Businesses
            </Typography>
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/images/team-discussion.webp"
            alt="team"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Middle large video */}
      <div className="md:col-span-2 relative group rounded-3xl overflow-hidden">
        {/* <div className="cursor-pointer absolute z-2 inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            onClick={() => setPlayVideo((state) => !state)}
            className="bg-black/70 text-white w-18 h-18 flex items-center justify-center p-6 rounded-full"
          >
            {PlayIcon}
          </Button>
        </div> */}
        <div
          className="w-full h-[240px] md:h-full"
          style={{ position: "relative" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SbYXkOAoZpI?si=C6a-4jup7cIQ5HH5"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Right column */}
      <div className="flex flex-row md:flex-col md:col-span-2 gap-4 h-48 md:h-auto">
        <div className="hidden md:block relative h-full w-full">
          <Image
            fill
            alt="startup"
            src="/images/eusate-team.webp"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="flex gap-4 h-full w-full">
          <div className="bg-black text-white rounded-3xl flex items-end p-8 relative h-full w-full">
            <div className="z-10">
              <Typography as="h2" variant="bold-3xl">
                10+
              </Typography>
              <Typography as="p" variant="medium-lg" className="text-white/70">
                Businesses
              </Typography>
            </div>
          </div>
          <div className="md:hidden bg-black text-white rounded-3xl flex items-end p-8 relative h-full w-full">
            <div className="z-10">
              <Typography as="h2" variant="bold-3xl">
                10+
              </Typography>
              <Typography as="p" variant="medium-lg" className="text-white/70">
                Businesses
              </Typography>
            </div>
          </div>
          <div className="hidden md:block relative h-full w-full">
            <Image
              src="/images/hand-to-hand.webp"
              alt="success"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
