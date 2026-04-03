
import Typography from "@/components/shared/atoms/Typography";
import Image from "next/image";

export default function GridLayout() {
  return (
    <div className="grid grid-cols-5 grid-row-2 gap-4 p-4 h-[500px]">

      {/* Left column */}
      <div className="flex flex-col gap-4">
        <div className="bg-black text-white rounded-3xl flex items-end p-8 relative h-full">
          <div className="z-10">
            <Typography as="h2" variant="bold-3xl">10+</Typography>
            <Typography as="p" variant="medium-lg" className="text-white/70">Businesses</Typography>
          </div>
        </div>

        <div className="relative h-full">
          <Image
            src="/images/team-discussion.webp"
            alt="team"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </div>

      {/* Middle large image */}
      <div className="col-span-2 relative">
        <Image
          src="/images/team-meeting.webp"
          alt="office"
          fill
          className="rounded-3xl object-cover"
        />
      </div>

      {/* Right column */}
      <div className="flex flex-col col-span-2 gap-4">
        <div className="relative h-full">
          <Image
            src="/images/eusate-team.webp"
            alt="startup"
            fill
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="flex gap-4 h-full w-full">
          <div className="bg-black text-white rounded-3xl flex items-end p-8 relative h-full w-full">
            <div className="z-10">
              <Typography as="h2" variant="bold-3xl">10+</Typography>
              <Typography as="p" variant="medium-lg" className="text-white/70">Businesses</Typography>
            </div>
          </div>

          <div className="relative h-full w-full">
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
