import React from "react";
import Logo from "../../atoms/Logo";
import Link from "next/link";
import Button from "../../molecules/Button";
import { JamMenu } from "@/assets/icons";

const Navbar = () => {
  return (
    <header className="absolute w-full backdrop-blur-[12px] py-6 z-3">
      <div className="container max-w-[1344px] flex items-center">
        <div className="w-3/5 flex items-center justify-between">
          <Logo type="full-gradient-white" />
          <nav className="md:flex items-center justify-end gap-8 hidden">
            <Link href="/#features" className="text-gray-400 text-medium-base">
              Features
            </Link>
            <Link href="/#benefits" className="text-gray-400 text-medium-base">
              Benefits
            </Link>
            <Link href="/#roadmap" className="text-gray-400 text-medium-base">
              Roadmap
            </Link>
          </nav>
        </div>
        <div className="ml-auto">
          <Link href="/apply">
            <Button className="px-4.5 py-3 hidden md:flex gradient">
              Apply to be an Early Tester
            </Button>
          </Link>
          <button className="md:hidden size-12 border border-transparent flex items-center justify-center">
            {JamMenu}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
