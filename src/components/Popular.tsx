"use client";
import { popular } from "@/constants/Popular";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRating from "./StarRating";
import { FavoriteIcon } from "../icons/FavouriteIcon";

export default function Popular() {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center text-5xl py-4">
        Popular Picks
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {popular.map(({ id, url, img, name, sale, favorite, stars, price }) => {
          return (
            <div key={id} className="relative flex flex-col justify-center">
              <Link href={url} className="hover:font-bold">
                <div className="relative w-[400px] h-[400px]">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center py-2">
                  <StarRating rating={stars} />
                  <span>{name}</span>
                  <span>{price} &#x058F;</span>
                </div>
              </Link>
              {sale ? (
                <div className="absolute uppercase w-auto h-6 px-2 flex flex-row items-center justify-center top-3 left-3 rounded-3xl bg-hm-yellow text-sm text-black">
                  Sale
                </div>
              ) : null}
              <div className="absolute h-auto top-3 right-3 flex items-center justify-center p-1 rounded-full bg-gray-600">
                <FavoriteIcon isFavorite={favorite} width={24} height={24} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
