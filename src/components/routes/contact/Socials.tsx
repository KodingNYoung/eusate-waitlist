import {
  SmsIcon,
  PhoneIcon,
  LocationIcon,
  ArrowUpRightIcon,
} from "@/assets/icons";
import Typography from "@/components/shared/atoms/Typography";
import Button from "@/components/shared/molecules/Button";
import { SOCIAL_LINKS } from "@/components/shared/organisms/footer/utils";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-10">
        <div className="flex w-fit group items-center gap-x-4 hover:underline p cursor-pointer">
          <span>{SmsIcon}</span>
          <Typography
            variant="semibold-lg"
            className="text-gray-700 text-semibold-base md:text-semibold-lg"
          >
            Email:
          </Typography>
          <Link
            href="mailto:info@eusate.com"
            className="flex items-center gap-1.5"
          >
            <span className="text-medium-base text-gray-700">
              info@eusate.com
            </span>
            <span className="transform-gpu hidden group-hover:block transition-all duration-300 stroke-gray-300">
              {ArrowUpRightIcon}
            </span>
          </Link>
        </div>
        <div className="flex w-fit group items-center gap-x-4 hover:underline p cursor-pointer">
          <span>{PhoneIcon}</span>
          <Typography variant="semibold-lg" className="text-gray-700">
            Tele:
          </Typography>
          <Link
            href="tel:+23490432761840"
            className="flex items-center gap-1.5"
          >
            <span className="text-medium-base text-gray-700">
              +23490432761840
            </span>
            <span className="transform-gpu hidden group-hover:block transition-all duration-300 stroke-gray-300">
              {ArrowUpRightIcon}
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span>{LocationIcon}</span>
          <div className="flex flex-wrap items-center gap-x-4">
            <Typography variant="semibold-lg" className="text-gray-700">
              Address:
            </Typography>
            <span className="text-medium-base text-gray-700">
              1 Rockview Close, Oba-ile Akure
            </span>
          </div>
        </div>
      </div>

      {/* SOCIAL LINK */}
      <div className="flex justify-between md:justify-start gap-4">
        {SOCIAL_LINKS.map(({ id, icon, link }) => (
          <Link key={id} href={link} target="_blank">
            <Button
              href={link}
              variant="tetiary"
              classNames={{ root: "p-3 bg-gray-50" }}
            >
              <span className="stroke-gray-30 fill-[#98A2B3]">{icon}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
