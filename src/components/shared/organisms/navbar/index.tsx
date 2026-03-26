import styles from "./style.module.css"
import Link from "next/link"
import Logo from "../../atoms/Logo"
import { EXPLORE_LIST } from "./utils"
import AppDropdown from "../../molecules/Popups/AppDropdown"
import Typography from "../../atoms/Typography"
import { ArrowDown, ArrowRight } from "@/assets/icons"
import Button from "../../molecules/Button"
import { ROUTES } from "@/utils/constants"
import { cls } from "@/utils/helpers"

const Navbar = () => {
  return (
    <div className={cls("fixed flex w-full z-99 justify-center h-[100px] ", styles.navbarBg)}>
      <div className="flex justify-between items-center w-[70%] ">
        <div className="flex gap-5">
          {
            EXPLORE_LIST.map(({ id, label, items }) =>
              <AppDropdown
                key={id}
                sections={[{ items }]}
                classNames={{ content: "bg-white rounded-lg" }}
                menuProps={{ itemClasses: { title: "text-gray-900" } }}
                triggerBtnProps={{ endContent: <ArrowDown width="16" height="16" color="#858D9D" /> }}
                triggerEl={<Typography variant="medium-base" className="text-gray-400">{label}</Typography>}
              />)
          }
        </div>
        <Link href="/" className="flex items-center gap-2.5">
          <Logo type="full-gradient-black" className="h-7 w-28" />
        </Link>
        <nav className="flex items-center gap-12">
          <Link href={ROUTES.PRICING} className="text-gray-400 text-medium-base">Pricing</Link>
          <span className="text-gray-100">|</span>
          <div className="flex items-center gap-6">
            <Link href={ROUTES.LOGIN} className="text-medium-sm text-gray-500">Login</Link>
            <Button href={ROUTES.SIGNUP} endContent={<ArrowRight color="white" />} className="py-2 px-6">Sign up</Button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
