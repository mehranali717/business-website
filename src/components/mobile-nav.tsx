import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoDark from "../../public/logo/logo-dark.svg";
import IconBurgerMenu from "../../public/art/icon_burger_menu.png";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const navList = ["Home", "Blog", "Portfolio", "Services", "Contact"];
  return (
    <Sheet key={"left"}>
      <SheetTrigger asChild>
        <Image src={IconBurgerMenu} alt="Burger Menu" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex-shrink-0 flex items-center">
            <Image
              className=""
              src={logoDark}
              width={150}
              height={20}
              alt="Logo"
            />
          </div>
        </SheetHeader>
        <ul className="mt-6 flex flex-col gap-y-3">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                href={`/`}
                className="text-base font-sora hover:text-[#1936BA] transition-colors font-medium "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
