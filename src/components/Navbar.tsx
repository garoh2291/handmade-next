"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { shop } from "@/constants/Shop";
import { blog } from "@/constants/Blog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="w-full h-20 flex flex-row items-center justify-between pl-5">
      <div className="w-20">
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <div className="border-2 border-transparent hover:border-b-hm-yellow hover:cursor-pointer">
          <Link href={"/about"}>About</Link>
        </div>
        <div className="border-2 border-transparent hover:border-b-hm-yellow hover:cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>Shop</DropdownMenuTrigger>
            <DropdownMenuContent>
              {shop.map((item: string, index: number) => {
                return (
                  <DropdownMenuItem
                    className="focus:bg-hm-yellow-bg focus:cursor-pointer"
                    key={index}
                  >
                    {item}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border-2 border-transparent hover:border-b-hm-yellow hover:cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger>Blog</DropdownMenuTrigger>
            <DropdownMenuContent>
              {blog.map((item: string, index: number) => {
                return (
                  <DropdownMenuItem
                    className="focus:bg-hm-yellow-bg focus:cursor-pointer"
                    key={index}
                  >
                    {item}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border-2 border-transparent hover:border-b-hm-yellow hover:cursor-pointer">
          <Link href={"/contacts"}>Contacts</Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <Input
          className="w-60 hover:border-hm-yellow focus:border-hm-yellow focus:border-[2px] focus:placeholder:pl-[1px]"
          placeholder="Search"
        />
        <div className="border-2 border-transparent hover:border-b-hm-yellow hover:cursor-pointer">
          <Link href={"/wishlist"}>Wishlist</Link>
        </div>
        <Link href={"/card"}>
          <Button
            variant="outline"
            className="hover:bg-white hover:border-hm-yellow"
          >
            <span>Card</span>
            <span>$237.89</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
