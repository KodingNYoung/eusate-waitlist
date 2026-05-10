import Typography from "@/components/shared/atoms/Typography";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { InternalPath } from "@/utils/types";
import Image from "next/image";

type Member = {
  id: number;
  imgSrc: InternalPath;
  name: string;
  role: string;
};

const team: Member[] = [
  {
    id: 1,
    imgSrc: "/images/founder-david.webp",
    name: "Daramola David",
    role: "CEO, AI & ML",
  },
  {
    id: 2,
    imgSrc: "/images/founder-nath.webp",
    name: "Natheniel Peter Lucky",
    role: "Mobile Engineer",
  },
  {
    id: 3,
    imgSrc: "/images/founder-young.webp",
    name: "Adabambo Abiodum",
    role: "CFO",
  },
  {
    id: 4,
    imgSrc: "/images/founder-daniel.webp",
    name: "Adebowale Daniel",
    role: "CTO",
  },
  {
    id: 5,
    imgSrc: "/images/founder-patrick.webp",
    name: "Adanini Patrick",
    role: "Product Lead",
  },
  {
    id: 6,
    imgSrc: "/about/images/daramola-daniel.webp",
    name: "Daramola Daniel",
    role: "Creative Designer & Video Editor",
  },
];

export const MeetTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full m-0 space-y-12">
      <SubHeader
        position="center"
        chipLabel="The Team"
        title="Meet the team"
        classNames={{
          title: "text-4xl md:text-bold-6xl text-white",
          titleContainer: "flex flex-col items-center ",
        }}
      />
      <div className="">
        <div className="flex flex-wrap justify-center px-6 items-center w-full gap-8 gap-y-10 md:gap-y-16">
          {team.map(({ id, ...member }) => (
            <MemberCard key={id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ imgSrc, role, name }: Omit<Member, "id">) => {
  return (
    <div className="relative flex flex-col gap-4 group w-full max-w-[329px]">
      <div className="relative w-full md:w-[333px] h-[320px] self-start rounded-x24 overflow-hidden">
        <Image
          alt={name}
          src={imgSrc}
          fill
          className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div>
        <Typography variant="medium-3xl" className="text-white">
          {name}
        </Typography>
        <Typography variant="medium-xl" className="text-white/50">
          {role}
        </Typography>
      </div>
    </div>
  );
};
