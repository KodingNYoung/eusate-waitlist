import Link from "next/link";
import { motion } from "motion/react";
import { cls } from "@/utils/helpers";
import { NAV_EXPLORE_LIST } from "./utils";
import { ROUTES } from "@/utils/constants";
import Button from "../../molecules/Button";
import { InternalPath } from "@/utils/types";
import Typography from "../../atoms/Typography";
import { Accordion } from "../../molecules/Accordion";
import { ArrowDown, ArrowRightGradIcon } from "@/assets/icons";

export const MobileNav = () => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 900, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="w-full fixed translate-y-[80px] flex flex-col gap-12 overflow-auto bg-white p-5"
    >
      <nav className="flex flex-col gap-4">
        <Accordion
          variant="splitted"
          itemClasses={{
            base: cls("group md:hidden px-0"),
            title: "text-semibold-base text-left data-[open=true]:uppercase",
          }}
          indicator={<span className="stroke-gray-400">{ArrowDown}</span>}
          items={NAV_EXPLORE_LIST.map(({ id, label, items }) => ({
            key: id.toString(),
            title: label,
            content: items.map(({ key, label, link }) => (
              <NavItem key={key} label={label} link={link ?? "/"} />
            )),
          }))}
        />
        <div className="grid gap-10 px-2">
          <Link
            href={ROUTES.PRICING}
            target="_blank"
            rel="noreferrer"
            className="text-semibold-base"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            target="_blank"
            rel="noreferrer"
            className="text-semibold-base"
          >
            Docs
          </Link>
        </div>
      </nav>

      <div className="grid gap-6 w-full">
        <Link href="/apply" target="_blank" rel="noreferrer">
          <Button
            variant="tetiaryText"
            classNames={{
              root: "w-full py-4",
              label: "text-medium-sm text-gray-500",
            }}
          >
            Login
          </Button>
        </Link>
        <Link href="/apply" target="_blank" rel="noreferrer">
          <Button
            classNames={{
              root: "w-full py-4",
              label: "text-medium-sm",
            }}
          >
            Sign up
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

type NavItemProps = {
  label: string;
  link: InternalPath;
};

const NavItem = ({ label, link }: NavItemProps) => {
  return (
    <Link
      href={link}
      className="flex justify-between border-b border-gray-50 py-4"
    >
      <Typography variant="regular-xs">{label}</Typography>
      <span className="">{ArrowRightGradIcon}</span>
    </Link>
  );
};
