import React, { useState } from "react";
import Logo from "../../atoms/Logo";
import Link from "next/link";
import Button from "../../molecules/Button";
import { ArrowRightIcon, CloseIcon, JamMenu } from "@/assets/icons";
import { cls } from "@/utils/helpers";
import { AnimatePresence, motion } from "motion/react";
import { span } from "motion/react-client";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header
        className={cls(
          "absolute w-full backdrop-blur-[12px] py-6 z-3",
          open && "pb-0 sm:pb-6"
        )}
      >
        <div className="container max-w-[1344px] flex items-center relative">
          <div className="w-3/5 flex items-center justify-between">
            <Link href="/">
              <Logo type="full-gradient-white" />
            </Link>
            <nav className="md:flex items-center justify-end gap-8 hidden">
              <Link
                href="/#features"
                className="text-gray-400 text-medium-base"
              >
                Features
              </Link>
              <Link
                href="/#benefits"
                className="text-gray-400 text-medium-base"
              >
                Benefits
              </Link>
              <Link href="/#roadmap" className="text-gray-400 text-medium-base">
                Roadmap
              </Link>
            </nav>
          </div>
          <div className="ml-auto">
            <Link href="/apply" target="_blank" rel="noreferrer">
              <Button className="px-4.5 py-3 hidden md:flex gradient">
                Apply to be an Early Tester
              </Button>
            </Link>
            <button
              onClick={() => setOpen((curr) => !curr)}
              className="md:hidden size-12 border border-transparent flex items-center justify-center fill-white stroke-white"
            >
              {open ? CloseIcon : JamMenu}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 283, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full flex flex-col gap-12 overflow-hidden backdrop-blur-[12px] border-b border-[#FFFFFF26] rounded-b-x20 p-5 md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                <Link href="/#features" className="text-white text-medium-base">
                  Features
                </Link>
                <Link href="/#benefits" className="text-white text-medium-base">
                  Benefits
                </Link>
                <Link href="/#roadmap" className="text-white text-medium-base">
                  Roadmap
                </Link>
              </nav>
              <Link
                href="/apply"
                target="_blank"
                rel="noreferrer"
                className="mx-auto"
              >
                <Button
                  classNames={{
                    root: "gradient py-4.5 px-7",
                    label: "text-semibold-sm",
                  }}
                  endContent={
                    <span className="stroke-white">{ArrowRightIcon}</span>
                  }
                >
                  Apply to be an Early Tester
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
