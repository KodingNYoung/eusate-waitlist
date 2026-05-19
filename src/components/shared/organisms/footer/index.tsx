import Link from "next/link";
import Image from "next/image";
import Logo from "../../atoms/Logo";
import Typography from "../../atoms/Typography";
import Button from "../../molecules/Button";
import { ROUTES } from "@/utils/constants";
import { FOOTER_EXPLORE_LIST } from "../navbar/utils";
import { ArrowRightIcon } from "@/assets/icons";
import { SocialTerms } from "./SocialTerms";
import { GradientIcon } from "../../atoms/Icon";

const Footer = () => {
  return (
    <div className="bg-[url(/images/footer-bg.png)] relative bg-cover bg-no-repeat bg-bottom rounded-[20px] md:rounded-[40px] pt-20 px-4 md:px-24 mt-3 mx-2 md:mx-4">
      <div className="relative container flex flex-col gap-12 md:gap-56 overflow-hidden">
        <div className="flex flex-wrap justify-between gap-y-16">
          <div className="flex flex-col gap-16 w-[463px]">
            <div className="grid gap-8">
              <Logo type="full-gradient-white" />
              <Typography variant="bold-3xl" className="text-white">
                Support that scales with you. Not against you.
              </Typography>
            </div>
            <div className="hidden md:block">
              <SocialTerms />
            </div>
          </div>

          {/* EXPLORE LIST */}
          <div className="flex flex-wrap justify-between gap-x-12 gap-y-20 w-[576px]">
            {FOOTER_EXPLORE_LIST.map(({ id, label, items }) => (
              <div key={id} className="flex  flex-col gap-6 md:gap-10 ">
                <Typography variant="medium-lg" className="text-white/40">
                  {label}
                </Typography>
                <nav className="flex flex-col gap-6 md:gap-10 items-start">
                  {items.map(({ key, label, link }) => (
                    <Link
                      key={key}
                      href={link ?? "/"}
                      className="text-bold-sm md:text-bold-lg text-white/60 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          <div className="flex md:hidden w-full">
            <SocialTerms />
          </div>
        </div>

        <div className="flex w-full mb-20 justify-center relative z-5 pt-10 md:pt-0">
          <Link href={process.env.NEXT_PUBLIC_BASE_URL + ROUTES.SIGNUP}>
            <Button
              size="sm"
              variant="outlined"
              className="py-4 border-0 before:hidden px-6 md:px-12 shadow-hard-medium group"
              endContent={<GradientIcon>{ArrowRightIcon}</GradientIcon>}
            >
              Get started today
            </Button>
          </Link>
        </div>
        <div className="absolute left-0 bottom-0 z-3 opacity-10 w-full h-[20rem] translate-y-[2rem]">
          <Image src="/logos/full-gradient-white.svg" fill alt="footer-img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
