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
import { sliderImg } from "@/constants/Slider";
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
        {sliderImg.map(
          (value: { url: string; title: string }, index: number) => {
            return (
              <CarouselItem key={index}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src={value.url}
                    alt={value.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            );
          }
        )}
      </CarouselContent>
      <CarouselPrevious className="absolute left-5" />
      <CarouselNext className="absolute right-5" />
    </Carousel>
  );
}
