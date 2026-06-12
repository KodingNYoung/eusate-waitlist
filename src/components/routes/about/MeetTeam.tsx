import Typography from "@/components/shared/atoms/Typography";
import { AnimatedBlock } from "@/components/shared/organisms/AnimatedBlock";
import {
  fadeUpVariants,
  staggerContainer,
} from "@/components/shared/organisms/AnimatedBlock/variants";
import { SubHeader } from "@/components/shared/organisms/PageHeader";
import { InternalPath } from "@/utils/types";
import { motion } from "framer-motion";
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
    name: "Daramola Damifogo",
    role: "AI & ML Engineer",
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
    role: "Frontend Engineer",
  },
  {
    id: 4,
    imgSrc: "/images/founder-daniel.webp",
    name: "Adebowale Daniel",
    role: "Backend Engineer",
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
  {
    id: 7,
    imgSrc: "/about/images/ayotomi.webp",
    name: "Ayotomi Odusina",
    role: "Marketer",
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
          titleContainer: "flex flex-col items-center",
        }}
      />
      <AnimatedBlock variants={staggerContainer}>
        {/* <motion.div className="flex flex-wrap justify-center px-6 items-center w-full gap-x-8 gap-y-10 md:gap-y-16"> */}
        <motion.div className="grid grid-cols-1 justify-items-center md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] w-full gap-x-8 gap-y-10 md:gap-y-16">
          {team.map(({ id, ...member }) => (
            <MemberCard key={id} {...member} />
          ))}
        </motion.div>
      </AnimatedBlock>
    </div>
  );
};

const MemberCard = ({ imgSrc, role, name }: Omit<Member, "id">) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{ duration: 2 }}
      className="relative flex flex-col gap-4 group w-full max-w-[329px]"
    >
      <div className="relative w-full h-[320px] self-start rounded-x24 overflow-hidden">
        <Image
          priority
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
    </motion.div>
  );
};
