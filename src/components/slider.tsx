import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import fairtrader from "../../public/art/fairtrader.svg";
import foundation from "../../public/art/companies/foundation.svg";
import micro1 from "../../public/art/companies/micro1.svg";
import blockhouse from "../../public/art/companies/blockhouse.svg";
import fliteCity from "../../public/art/companies/flite city.svg";
import appraiseall from "../../public/art/companies/appraiseall.svg";
import convrx from "../../public/art/companies/convrx.svg";
import Garuda from "../../public/art/companies/Garuda.svg";
import Image from "next/image";

export default function Slider() {
  const cards = [
    {
      image: micro1,
      title: "",
    },
    {
      image: blockhouse,
      title: "",
    },
    {
      image: fliteCity,
      title: "",
    },
    {
      image: foundation,
      title: "",
    },
    {
      image: appraiseall,
      title: "",
    },
    {
      image: convrx,
      title: "",
    },
    // {
    //   image: fairtrader,
    //   title: "Fairtrader",
    // },
    {
      image: Garuda,
      title: "",
    },
  ];

  return (
    <div className="bg-[linear-gradient(80.42deg,rgba(0,0,0,0.16)_25.25%,rgba(83,84,108,0.16)_98.05%)] border-[1px] border-border rounded-[20px] max-[1444px]:w-[70%] py-[20px] px-[40px]">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full min-[1444px]:w-[1300px] bg-[linear-gradient(79.59deg,_rgba(51,51,62,0.16)_6.21%,_rgba(83,84,108,0.16)_98.02%)]  px-6 py-3 rounded-[20px]"
      >
        <CarouselContent className="">
          {cards.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <div className="flex justify-center h-full items-center gap-3">
                  <Image
                    src={item.image}
                    className="w-auto h-auto"
                    width={1}
                    height={1}
                    alt="card"
                    priority
                  />
                  <p>{item.title}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)]" />
        <CarouselNext className="bg-[linear-gradient(87.95deg,#090EDB_-15.78%,#E73DC4_102.06%)]" />
      </Carousel>
    </div>
  );
}
