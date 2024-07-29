"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import AvatarImg from "./avatar";
import { Star } from "lucide-react";
import memoji from "../../public/art/memoji.png";
import Image from "next/image";
import memoji1 from "../../public/art/memoji-1.png";
import memoji2 from "../../public/art/memoji-2.png";
import memoji3 from "../../public/art/memoji-3.png";
import memoji4 from "../../public/art/memoji-4.png";
import memoji5 from "../../public/art/memoji-5.png";
import memoji6 from "../../public/art/memoji-6.png";
import memoji7 from "../../public/art/memoji-7.png";
import memoji8 from "../../public/art/memoji-8.png";
import memoji9 from "../../public/art/memoji-9.png";

export default function TestimonialCarousel() {
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
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ loop: true }}
      className=" w-full min-[1140px]:max-w-5xl mx-auto"
    >
      <CarouselContent className="ml-0">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-[370px] md:basis-1/2 lg:basis-1/3"
          >
            <div className="flex flex-col gap-8 ">
              {testimonials1.map((testimonial, index) => (
                <Card className="p-0 h-[188px] overflow-hidden ">
                  <CardContent className="bg-[#3E3C3D80] w-full p-3 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-base grid grid-cols-5 gap-1 w-fit">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <Star
                              key={index}
                              className="text-yellow-500"
                              fill="currentColor"
                            />
                          ))}
                      </span>
                      <p className="text-base mt-2 text-[#FEF9F6] w-fit">
                        {testimonial.message}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 justify-between mt-auto">
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
                      <p className="text-sm text-[#BCB9B4] text-end my-auto">
                        {testimonial.designation}{" "}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block" />
      <CarouselNext className="hidden lg:block" />
    </Carousel>
  );
}
