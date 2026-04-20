import Link from "next/link";
import { useState } from "react";
import Logo from "../../atoms/Logo";
import { cls } from "@/utils/helpers";
import styles from "./style.module.css";
import { MobileNav } from "./MobileNav";
import { ROUTES } from "@/utils/constants";
import { NAV_EXPLORE_LIST } from "./utils";
import Button from "../../molecules/Button";
import { AnimatePresence } from "framer-motion";
import Typography from "../../atoms/Typography";
import AppDropdown from "../../molecules/Popups/AppDropdown";
import { ArrowDown, ArrowRight, CloseIcon, JamMenu } from "@/assets/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-open={open}
      className={cls(
        "relative md:fixed w-full z-3 filter drop-shadow-[0_0_80px_rgba(0,0,0,0.2)]",
        "data-[open=true]:fixed",
      )}
    >
      <div
        className={cls(
          styles.navbarBg,
          "flex bg-white w-full z-3 justify-around h-[100px] shadow-3xl",
        )}
      >
        <div className="container flex justify-between items-center w-full md:w-[70%] ">
          {/* EXPLORE */}
          <div className="hidden md:flex gap-5 ">
            {NAV_EXPLORE_LIST.map(({ id, label, items }) => (
              <AppDropdown
                key={id}
                sections={[{ items }]}
                classNames={{ content: "bg-white rounded-lg" }}
                menuProps={{
                  itemClasses: { title: "text-gray-900 text-regular-xs" },
                }}
                triggerBtnProps={{
                  endContent: <span className="stroke-black">{ArrowDown}</span>,
                }}
                triggerEl={
                  <Typography variant="medium-base" className="text-gray-400">
                    {label}
                  </Typography>
                }
              />
            ))}
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5">
            <Logo type="full-gradient-black" className="h-7 w-28" />
          </Link>

          {/* CTA */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              href={ROUTES.PRICING}
              className="text-gray-400 text-medium-base"
            >
              Pricing
            </Link>
            <span className="text-gray-100">|</span>
            <div className="flex items-center gap-6">
              <Link
                href={ROUTES.LOGIN}
                className="text-medium-sm text-gray-500"
              >
                Login
              </Link>
              <Button
                href={ROUTES.SIGNUP}
                endContent={<span className="stroke-white">{ArrowRight}</span>}
                className="py-2 px-6"
              >
                Sign up
              </Button>
            </div>
          </nav>

          {/* HAMBURGER */}
          <Button
            onClick={() => setOpen((curr) => !curr)}
            className="md:hidden size-12 border border-transparent flex items-center justify-center fill-white stroke-white"
          >
            {open ? CloseIcon : JamMenu}
          </Button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>{open && <MobileNav />}</AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
