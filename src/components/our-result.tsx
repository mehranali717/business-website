import Image from "next/image";
import React from "react";
import line from "../../public/art/line2.png";
import { Card, CardContent } from "./ui/card";
import AvatarImg from "./avatar";
import GradientBtn from "./gradient-btn";
import globe from "../../public/art/globe.png";
import TestimonialCarousel from "./testimonial-carousel";
import memoji from "../../public/art/memoji.png";
import memoji1 from "../../public/art/memoji-1.png";
import memoji2 from "../../public/art/memoji-2.png";
import memoji3 from "../../public/art/memoji-3.png";
import memoji4 from "../../public/art/memoji-4.png";
import memoji5 from "../../public/art/memoji-5.png";
import memoji6 from "../../public/art/memoji-6.png";
import memoji7 from "../../public/art/memoji-7.png";
import memoji8 from "../../public/art/memoji-8.png";
import memoji9 from "../../public/art/memoji-9.png";

export default function OurResult() {
  const testimonials1 = [
    {
      name: "Eric Dawson",
      designation: "Head of marketing",
      message: `This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.`,
      image: memoji,
    },
    {
      name: "Sophie Moore",
      designation: "CTO of Lambda",
      message: `I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.`,
      image: memoji1,
    },
    {
      name: "Andrew Gwadyr",
      designation: "Entrepreneur",
      message: `This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!`,
      image: memoji2,
    },
  ];

  const testimonials2 = [
    {
      name: "Steve Harley",
      designation: "Entrepreneur",
      message: `If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier`,
      image: memoji9,
    },
    {
      name: "Annie Deway",
      designation: "Designer",
      message: `I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!`,
      image: memoji3,
    },
    {
      name: "Michel O Neill",
      designation: "Head of Sales",
      message: `I don't know how I ever lived without this app! It's made scheduling appointments and meetings a breeze, and I love how I can sync it across all my devices.`,
      image: memoji4,
    },
    {
      name: "Bard De Costa",
      designation: "Entrepreneur",
      message: `As someone with a busy schedule, this app has been a lifesaver! It's helped me stay organized and on top of everything, and I couldn't be happier with it.`,
      image: memoji5,
    },
  ];

  const testimonials3 = [
    {
      name: "Ella Moridin",
      designation: "Product Designer",
      message: `I've recommended this app to all my friends and colleagues! It's the best calendar app out there, and it's made managing my schedule a breeze.`,
      image: memoji6,
    },
    {
      name: "Mary Cath",
      designation: "Solo-Entreprenuer",
      message: `This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.`,
      image: memoji7,
    },
    {
      name: "Johana Smith",
      designation: "Entrepreneur",
      message: `I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.`,
      image: memoji8,
    },
  ];

  return (
    <div className="mt-[148px] lg:mt-[370px] overflow-hidden">
      <div className="w-[85%] flex justify-center mx-auto lg:mt-[80px]">
        <p className="text-[30px] leading-[1.2] lg:leading-normal lg:text-[56px] font-sabor text-center relative w-fit ">
          Our Results Speak for Themselves
          {/* <span className="lg:text-[#0E35E3]">Themselves</span> */}
          <Image
            src={line}
            width={276}
            height={4}
            alt="line"
            priority
            className="hidden lg:block absolute max-[533px]:top-[85px] top-[50px] lg:top-[75px] max-[533px]:right-0 max-[533px]:left-0 m-auto right-[0] lg:right-3 w-[200px] lg:w-[276px]"
          />
        </p>
      </div>
      <div className="pt-[2.5rem] pb-6 relative">
        {/* <Image
          src={globe}
          width={640}
          height={934}
          alt="globe"
          priority
          className="absolute top-[100px] right-0 z-50"
        /> */}
        {/* for desktop ( max-[1400px]:hidden) */}
        <div className="space-y-6 relative z-50 max-[1400px]:hidden">
          <div className="flex justify-center gap-6 items-center ">
            {testimonials1.map((testimonial, index) => (
              <Card
                key={index + "jhjh"}
                className="p-0 max-w-[504px] h-[188px] overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-6 items-center max-w-fit mx-auto">
            {testimonials2?.map((testimonial, index) => (
              <Card
                key={index + "jhh"}
                className="p-0 max-w-[504px] h-[188px] overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-6 items-center ">
            {testimonials3.map((testimonial, index) => (
              <Card
                key={index + "jhjh"}
                className="p-0 max-w-[504px] h-[188px] overflow-hidden"
              >
                <CardContent className="bg-[#3E3C3D80] p-3 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-base">⭐⭐⭐⭐⭐</p>
                    <p className="text-base mt-3.5 text-[#FEF9F6]">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        width={40}
                        height={40}
                        alt="Avatar"
                      />
                      <p className="text-sm text-[#BCB9B4]">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-sm text-[#BCB9B4]">
                      {testimonial.designation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* for mobile  and laptop min-[1400px]:hidden */}
        <div className="max-w-full min-[1400px]:hidden">
          <TestimonialCarousel />
        </div>
        <div className="flex justify-center mt-[18px] HD:mt-[90px] relative z-50">
          <GradientBtn text="Book a Call" />
        </div>
      </div>
    </div>
  );
}
