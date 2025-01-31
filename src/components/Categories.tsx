"use client";
import { categories } from "@/constants/categories";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="w-full h-36 flex flex-row justify-between items-center px-5">
      {categories.map(
        (value: { url: string; img: string; name: string }, index: number) => {
          return (
            <div key={index}>
              <Link href={value.url}>
                <div className="flex flex-row items-center gap-2 hover:text-hm-yellow">
                  <div className="relative w-24 h-24">
                    <Image
                      src={value.img}
                      alt={value.name}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <span>{value.name}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
}
