import React from "react";
import { Separator } from "./ui/separator";
import GradientText from "./gradient-text";
import Image from "next/image";
import heroGradient from "../../public/art/hero-gradient.png";
import heroGradient2 from "../../public/art/hero-img-gradiant.svg";
import heroImg from "../../public/art/hero-img.png";
import HeroSectionImg from "../../public/art/HeroSectionImg.png";
import HeroSectionSvg from "../../public/art/HeroSectionImg.svg";
import webBottom from "../../public/art/web-bottom.png";

import { Button } from "./ui/button";
import GradientBtn from "./gradient-btn";

export default function HeroSection() {
  return (
    <div className="lg:pt-[100px]  mx-auto">
      <img
        src="/art/hero-img-mobile.svg"
        className="absolute top-[39px] left-0 w-full h-auto md:hidden"
      />
      <div className=" absolute top-14 -left-5"></div>
      <div className="lg:pt-[20px] md:pt-[100px] relative mx-auto">
        <div className="hidden md:block absolute top-[-35%]  left-1/2 -translate-x-1/2 w-[70%]">
        <Image
            src={heroGradient2}
            width={1920}
            height={1100}
            alt="hero"
            priority
          />
        </div>
        {/* for desktop & latptop */}
        <div className="flex gap-[32px] w-fit mx-auto max-lg:hidden relative">
          <div className="text-end">
            <GradientText text="Access 10x" />

            <p className="font-sabor text-[30px] px-2 lg:text-[40px]">
              Software Development Team
            </p>
          </div>
          <div>
            <Separator orientation="vertical" className="" />
          </div>
          <div>
            <GradientText text="Save 80%" />
            <p className="font-sabor text-[30px] px-2 lg:text-[40px]">
              on Tech Costs Within 30 Days
            </p>
          </div>
        </div>
        {/* for mobile & tablet */}
        <div className="lg:hidden relative z-50 flex flex-col items-center sm:gap-3">
          {/* <GradientText text="Access 10x &nbsp; &nbsp;&nbsp;&nbsp; Save 80%" /> */}
          <GradientText text="Access 10x" />

          <p className="font-sabor text-[20px] px-2 lg:text-[40px] text-center">
            Software Development Team
          </p>

          <GradientText text="Save 80%" />

          <p className="font-sabor text-[20px] px-2 lg:text-[40px] text-center">
            on Tech Costs Within 30 Days
          </p>
          <div className="hidden md:block">
            <Image
              className=""
              src={HeroSectionImg}
              width={932}
              height={542}
              alt="hero"
              priority
            />
          </div>

          <div className="md:hidden h-[85vw] sm:h-[90vw]">
            {/* <Image
              className="  "
              src={HeroSectionSvg}
              width={932}
              height={542}
              alt="hero"
              priority
            /> */}
          </div>

          <GradientBtn
            text="Book a Call"
            className="mt-[5vw] max-md:mt-[8vw]"
          />
          <p className="text-[15px] mt-[30px] leading-[24px] lg:leading-[33px] md:text-xl lg:text-2xl text-center font-normal font-raleway container">
            We&#39;ll build and manage a dedicated software development team,
            save you 80% on costs, and ship a new product or feature improvement
            in 30 days - or we&#39;ll work for free until we do.
          </p>
        </div>
        <div className="relative max-lg:hidden ">
          <div className="abolute w-full">
            <Image
              className="mx-auto"
              src={HeroSectionImg}
              width={932}
              height={542}
              alt="hero"
              priority
            />
            <div className="absolute w-full bottom-[-125px]">
              <Image
                className="mx-auto"
                src={webBottom}
                width={1270}
                height={206}
                alt="web"
                priority
              />
              <div className="absolute mx-auto text-center w-full bottom-0 space-y-10 ">
                <GradientBtn text="Book a Call" />
                <p className="text-2xl  text-center font-normal  font-raleway lg:px-4 lg:text-2xl  max-w-[1080px] mx-auto">
                  We&#39;ll build and manage a dedicated software development
                  team, save you 80% on costs, and ship a new product or feature
                  improvement in 30 days - or we&#39;ll work for free until we
                  do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
