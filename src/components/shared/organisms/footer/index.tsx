import Link from "next/link";
import Logo from "../../atoms/Logo";
import Typography from "../../atoms/Typography";
import Button from "../../molecules/Button";
import { ROUTES } from "@/utils/constants";
import { SOCIAL_LINKS } from "./utils";
import { NAV_EXPLORE_LIST } from "../navbar/utils";
import { ArrowRightIcon } from "@/assets/icons";

const Footer = () => {
  return (
    <div className="bg-[url(/images/footer-bg.png)] relative bg-cover bg-no-repeat bg-bottom rounded-[40px] pt-20 px-24 mt-20 mx-4">
      <div className="container flex flex-col gap-56">
        <div className="flex justify-between">
          <div className="flex flex-col gap-16 w-[463px]">
            <div className="grid gap-8">
              <Logo type="full-gradient-white" />
              <Typography variant="bold-3xl" className="text-white">
                Support that scales with you. Not against you.
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ id, icon, link }) => (
                <Button
                  key={id}
                  href={link}
                  variant="tetiary"
                  classNames={{ root: "p-3 border-white/20" }}
                >
                  <span className="stroke-gray-400">{icon}</span>
                </Button>
              ))}
            </div>
            <nav className="flex gap-8">
              <Link
                href={ROUTES.PRIVACY}
                className="text-bold-lg text-white-60"
              >
                Privacy policy
              </Link>
              <Link href={ROUTES.TERMS} className="text-bold-lg text-white-60">
                Terms and Conditions
              </Link>
            </nav>
          </div>
          <div className="flex justify-between gap-4 w-[576px]">
            {NAV_EXPLORE_LIST.map(({ id, label, items }) => (
              <div key={id} className="flex flex-col gap-6 ">
                <Typography variant="medium-lg" className="text-white/40">
                  {label}
                </Typography>
                <nav className="flex flex-col gap-6 items-start">
                  {items.map(({ key, label, link }) => (
                    <Link
                      key={key}
                      href={link ?? "/"}
                      className="text-bold-lg text-white/60"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex w-full mb-20 justify-center relative z-5">
            <Button
              variant="outlined"
              className="py-4 px-12"
              endContent={
                <span className="stroke-gray-900">{ArrowRightIcon}</span>
              }
            >
              Get started today
            </Button>
          </div>
          <Logo
            type="full-gradient-white"
            width={1400}
            height={1400}
            className="absolute bottom-0 right-0 z-3 -translate-x-[90px] opacity-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
