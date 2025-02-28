"use client";
import { categories } from "@/constants/Categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="w-full h-36 flex flex-row justify-between items-center px-5">
      {categories.map(({ id, url, img, name }) => {
        return (
          <div key={id}>
            <Link href={url}>
              <div className="flex flex-row items-center gap-2 hover:text-hm-yellow">
                <div className="relative w-24 h-24">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div>{name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
