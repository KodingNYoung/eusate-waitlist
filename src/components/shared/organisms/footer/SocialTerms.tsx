import Link from "next/link";
import { SOCIAL_LINKS } from "./utils";
import Button from "../../molecules/Button";
import { ROUTES } from "@/utils/constants";

export const SocialTerms = () => {
  return (
    <div className="grid gap-16 w-full">
      <div className="flex items-center justify-between md:justify-start gap-4 w-full">
        {SOCIAL_LINKS.map(({ id, icon, link }) => (
          <Link target="_blank" key={id} href={link}>
            <Button
              href={link}
              variant="tetiary"
              classNames={{
                root: "p-3 border-white/20 hover:!bg-white/15",
              }}
            >
              <span className="stroke-gray-400 fill-[#98A2B3]">{icon}</span>
            </Button>
          </Link>
        ))}
      </div>
      <nav className="flex gap-8 justify-between md:justify-start">
        <Link
          href={ROUTES.PRIVACY}
          className="text-bold-sm md:text-bold-lg text-white-60"
        >
          Privacy policy
        </Link>
        <Link
          href={ROUTES.TERMS}
          className="text-bold-sm md:text-bold-lg text-white-60"
        >
          Terms and Conditions
        </Link>
      </nav>
    </div>
  );
};
