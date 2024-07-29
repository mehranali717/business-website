import React from "react";
import logoDark from "../../public/logo/logo-dark.svg";
import webArt from "../../public/art/web.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import MobileNav from "./mobile-nav";

export default function TopNav() {
  const navList = [
    { title: "Home", path: "/home" },
    { title: "Blog", path: "/blog" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" }
  ];
  return (
    <div className="">
      {/* for desktop & latptop */}
      <div className="FHD:w-[1320px] MHD:w-[1100px] HD:w-[900px] lg:w-[800px] mx-auto px-4 sm:px-6 lg:px-8 border border-[#454545] rounded-2xl relative max-lg:hidden mt-4 ">
        <div className="flex items-center justify-between h-16 relative z-10">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                className=""
                src={logoDark}
                width={165}
                height={40}
                alt="Logo"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-6 2xl:gap-10">
              {navList.map((item, index) => (
                <Link key={index} href={item.path} className="text-base font-medium ">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {/* <ModeToggle /> */}
            <Button className="dark:bg-transparent dark:text-white text-[#1936BA] bg-white dark:hover:bg-[#1936BA]  text-base border dark:border-[#1936BA] border-white rounded-[10px] w-[140px] h-[34px]">
              Book a Call
            </Button>
          </div>
          <Image
            src={webArt}
            width={1240}
            height={200}
            alt="web"
            className="absolute top-10 mx-auto h-[175px] left-1/2 -translate-x-1/2"
          />
        </div>
      </div>

      {/* for mobile & tablet */}
      <div className="lg:hidden relative z-[999999]">
        <div className="h-[80px] w-full flex items-center mx-auto bg-gray-950/5">
          <div className="ml-4 flex-shrink-0">
            <MobileNav />
          </div>
          <div className="flex-1 flex justify-center pr-12">
            <Image
              src={logoDark}
              alt="Logo"
              objectFit="contain"
              width={150}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
