"use client";

import React from "react";
import footerTopBg from "../../public/art/footer-top-bg.png";
import Image from "next/image";
import leftFlow from "../../public/art/left-flow.png";
import GradientBtn from "./gradient-btn";
import footerFrame from "../../public/art/footer-frame.png";
import { Separator } from "./ui/separator";
import Link from "next/link";
import footerCenterBg from "../../public/art/hero-img-gradiant-circles.svg";
import footer from "../../public/art/footer.svg";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="relative ">
        <Image
          src={leftFlow}
          width={400}
          height={760}
          className="absolute top-0 left-0 opacity-30 max-lg:hidden max-h-[760px]"
          alt="left flow"
          priority
        />
        <img
          src="/art/arrows-mobile.png"
          className="w-[312px] h-[334px] object-contain absolute -left-[50px] z-0  select-none -top-0 md:top-[50px] lg:hidden"
        />
        {/* <img
          src="/art/footer-big-mobile-bg.png"
          className="absolute opacity-60 top-[-1000px] w-full"
        /> */}
      </div>
      <div className="flex justify-center max-lg:mt-10 items-center md:hidden px-20">
        <Image
          src={footerFrame}
          width={325}
          height={320}
          alt="footer"
          priority
          className="relative z-10"
        />
      </div>
      <div className="container relative z-50 mt-[30px] lg:mt-[-40px] flex justify-center lg:justify-between items-center">
        <div>
          <p className="font-sabor whitespace-nowrap text-[30px] md:text-[60px] lg:text-[40px] 2xl:text-[60px] leading-none max-md:text-center">
            <span className="text-[80px] lg:text-[100px] 2xl:text-[150px] ">
              10x
            </span>{" "}
            Your <br />
            Software Development <br />
            <span className="text-[40px] md:text-[40px] lg:text-[50px] 2xl:text-[70px] font-semibold">
              Guaranteed
            </span>
          </p>
          <p className="text-[23px] lg:text-[25px] 2xl:text-[30px] font-sabor max-w-[740px] my-6 max-md:text-center">
            Reduce the overhead of hiring, training, and onboarding - and save
            80% on tech costs.
          </p>
          <div className="max-md:justify-center max-md:flex max-md:items-center">
            <GradientBtn text="Book a Call" />
          </div>
        </div>
        <div>
          <Image
            src={footer}
            width={510}
            height={416}
            alt="footer"
            priority
            className="max-lg:hidden"
          />
        </div>
      </div>
      <Separator className="mt-[30px]  lg:mt-[100px]  mx-auto z-50" />
      <div className="w-full px-4 md:px-8 container flex flex-col md:justify-center md:items-center gap-[4vw] max-md:pb-3 relative">
        <Image
          src={footerCenterBg}
          width={744}
          height={744}
          className="absolute left-0 right-0 m-auto bottom-0"
          alt="footer"
          priority
        />
        <div className="w-full flex flex-col md:flex-row gap-[-5vw]  relative z-50">
          <div className="flex max-md:flex-col lg:gap-[10vw] justify-between md:justify-center">
            <div className="pt-[4.2vw] flex-1 lg:max-md:px-[10vw] max-md:text-center ">
              <h1 className="font-sabor text-[33px] sm:text-[35px] font-400 leading-tight tracking-tight">
                We've delivered 200+ successful projects over 6 years of
                development
              </h1>
              <Link href="" target="blank">
                <button
                  className="rounded-[12px] bg-[linear-gradient(87.43deg,#090EDB_8.8%,#DA24BB_84.38%)]  
                py-[2vw] lg:py-[1.3vw] px-[4.167vw] whitespace-nowrap font-raleway font-bold mt-[3vw] text-[0.9rem] sm:text-[1.597vw]"
                >
                  Book a Discovery Call
                </button>
              </Link>
            </div>
            <div className="md:hidden text-lg text-[#C6C6C6] text-right  pt-[4.2vw] font-sabor">
              <div className="flex flex-col md:items-center justify-center max-md:items-center max-lg:hidden font-sabor">
                <p onClick={scrollToTop}>Back To Top</p>
              </div>
              <div className="flex px-4 justify-between lg:justify-center gap-[1vw] text-white container pt-[4.2vw] md:hidden font-sabor">
                <div className="flex flex-col text-start items-start gap-y-2 font-sabor">
                  <h1 className="text-lg sm:text-[25px] font-400 pb-2">
                    Quick Links
                  </h1>

                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Services</Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Free Trial</Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Contact Us</Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link className="underline" href={"/"}>
                      Privacy Policy
                    </Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link className="underline" href={"/"}>
                      Terms Of Use
                    </Link>
                  </p>
                </div>
                <div className="w-[40px] min-[478px]:w-[100px]"></div>
                <div className="flex flex-col text-start items-start gap-y-2">
                  <h1 className="text-lg sm:text-[25px] pb-2">Follow Us</h1>
                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Linkedin</Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Twitter</Link>
                  </p>
                  <p className="text-base sm:text-[20px]">
                    <Link href={"/"}>Facebook</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-start md:justify-end gap-[6vw] md:pt-[9.9vw] w-full">
            <div className="hidden  md:flex flex-col gap-[2vw] whitespace-nowrap">
              <h3 className="text-[1.736vw] font-700  font-Montserrat font-bold -ml-[2px]">
                Quick Links
              </h3>
              <div className="flex flex-col text-[1.2vw] font-Nunito text-[#E5E5E5] gap-[0.8vw] ">
                <Link href="/services/artificialintelligence">
                  <p>Services</p>
                </Link>
                <Link href="/">
                  <p>Free Trial</p>
                </Link>
                <Link href="/">
                  <p>Contact Us</p>
                </Link>
                <p>
                  <Link href={"/"}>Privacy Policy</Link>
                </p>
                <p>
                  <Link href={"/"}>Terms of Use</Link>
                </p>
              </div>
            </div>
            <div className="flex md:flex-col gap-[3vw] md:gap-[2vw] items-center max-md:mb-3 max-md:mt-7 max-md:hidden">
              <h3 className="text-[0.91rem] sm:text-[200px] md:text-[1.736vw] font-700  font-Montserrat font-bold mx-0 -ml-[2px] whitespace-nowrap">
                Follow Us
              </h3>
              <div className="flex md:flex-col text-[1.2vw] font-Nunito-50 text-[#E5E5E5] gap-[2vw] md:gap-[0.8vw] ">
                <div className="flex gap-[3.8vw] md:gap-[1.8vw]">
                  <img
                    src="/icons/linkedin.svg"
                    alt="linkedin"
                    className="md:w-[1.285vw] md:h-[1.285vw] w-[10px] h-[10px]"
                  />
                  <span className="hidden md:block">LinkedIn</span>
                </div>
                <div className="flex gap-[3.8vw] md:gap-[1.8vw]">
                  <img
                    src="/icons/facebook.svg"
                    alt="linkedin"
                    className="md:w-[1.285vw] md:h-[1.285vw] w-[10px] h-[10px] "
                  />
                  <span className="hidden md:block">Facebook</span>
                </div>
                <div className="flex gap-[1.9vw]">
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    className="md:w-[1.285vw] md:h-[1.285vw] w-[10px] h-[10px] "
                  />
                  <span className="hidden md:block">Instagram</span>
                </div>
                <div className="flex gap-[1.9vw]">
                  <img
                    src="/icons/twitter.svg"
                    alt="twitter"
                    className="md:w-[1.285vw] md:h-[1.285vw] w-[10px] h-[10px] "
                  />
                  <span className="hidden md:block">Twitter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 w-full flex justify-between gap-[8vw] pb-3  text-[1.442vw] min-[1920px]:text-lg md:text-[1.042vw] text-[#C6C6C6] mx-0 max-md:hidden">
          <div className="flex max-md:justify center">
            <div>&copy;</div>
            <p>Copyright &copy; 2024 Flex Lab. All Rights Reserved.</p>
          </div>
          <div className=" hidden md:flex gap-[1vw]">
            <p>
              <Link href={"/"}>Terms & Conditions</Link>
            </p>
            <p>|</p>
            <p>
              <Link href={"/"}>Privacy Policy</Link>
            </p>
            {/* <p>|</p>
          <p>Cookie Policy</p> */}
            <p>|</p>
            <Link href="/">
              <p>Portfolio</p>
            </Link>
            <p>|</p>
            <Link href="/">
              <p>Blog</p>
            </Link>
            <p>|</p>
            <p>
              <Link href={"/"}>Back To Top</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center text-center bg-black text-white w-full text-[15px]  py-4 px-4">
        <p>Copyright &copy; 2024 Flex Lab. All Rights Reserved.</p>
        <div className="flex gap-2">
          <p>
            <Link href={"/"}>Terms & Conditions</Link>
          </p>
          <span>|</span>
          <p>
            <Link href={"/"}>Privacy Policy</Link>
          </p>
          <span>|</span>
          <p>
            <Link href={"/"}>Portfolio</Link>
          </p>
        </div>
        <div className="flex gap-2">
          <p>
            <Link href={"/"}>Blog</Link>
          </p>
          <span>|</span>
          <p onClick={scrollToTop}>Back To Top</p>
        </div>
      </div>
    </div>
  );
}
