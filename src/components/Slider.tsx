"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { slider } from "@/constants/Slider";
import Image from "next/image";

export default function Slider() {
  return (
    <Carousel
      className="relative w-full h-[500px]"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {slider.map(({ id, img, name }, index) => {
          return (
            <CarouselItem key={id}>
              <div className="relative w-full h-[500px]">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
}
