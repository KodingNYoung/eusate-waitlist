import React from "react";
import Logo from "../../atoms/Logo";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "@/assets/icons";
import Link from "next/link";
import Typography from "../../atoms/Typography";
import { EUSATE_SOCIALS } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="py-10 container max-w-[1344px]">
      <div className="border-t border-gray-50 py-20 flex items-start justify-between flex-wrap gap-16">
        <div className="flex flex-col gap-10">
          <Logo type="full-gradient-black" />
          <Typography
            as="a"
            href="mailto:info@eusate.com"
            className="text-medium-lg text-gray-400"
          >
            info@eusate.com
          </Typography>
          <div className="flex items-center gap-6">
            <a href={EUSATE_SOCIALS.LINKEDIN} target="_blank" rel="noreferer">
              {LinkedinIcon}
            </a>
            <a href={EUSATE_SOCIALS.X} target="_blank" rel="noreferer">
              {TwitterIcon}
            </a>
            <a href={EUSATE_SOCIALS.INSTAGRAM} target="_blank" rel="noreferer">
              {InstagramIcon}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="grid gap-6 min-w-40">
            <Typography as="h5" className="text-semibold-lg text-gray-700">
              Product
            </Typography>
            <div className="flex flex-col items-start gap-5">
              <Link href="/#features" className="text-medium-lg text-gray-400">
                Features
              </Link>
              <Link href="/#benefits" className="text-medium-lg text-gray-400">
                Benefits
              </Link>
              <Link href="/#roadmap" className="text-medium-lg text-gray-400">
                Roadmap
              </Link>
            </div>
          </div>
          <div className="grid gap-6 min-w-40">
            <Typography as="h5" className="text-semibold-lg text-gray-700">
              Legal
            </Typography>
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/terms-and-condition"
                className="text-medium-lg text-gray-400"
              >
                Terms of use
              </Link>
              <Link
                href="/privacy-policy"
                className="text-medium-lg text-gray-400"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
