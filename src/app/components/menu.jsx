"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/menu-drawer";
import { usePathname } from "next/navigation";

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/#courses",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Menu() {
  // find path
  const path = usePathname();

  return (
    <Menubar className="my-3 justify-between">
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger className="cursor-pointer flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="h-6 w-6"
            >
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
            <span>learning shadcn/ui</span>
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <div className="max-lg:hidden inline-flex">
        {menu.map((m, mIdx) => (
          <MenubarMenu key={mIdx}>
            <Link href={m.path}>
              <MenubarTrigger
                className={
                  path == m.path
                    ? "cursor-pointer !text-rick"
                    : "cursor-pointer hover:text-rick"
                }
              >
                {m.name}
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        ))}
      </div>
      <Drawer>
        <DrawerTrigger asChild className="lg:hidden inline-flex">
          <Button variant="ghost">
            <MenuIcon className="size-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-4">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-center">Menu</DrawerTitle>
              <DrawerDescription className="text-xs text-gray-300 text-center">
                Welcome to Drawer Menu
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex flex-col w-full space-y-2">
              {menu.map((m, mIdx) => (
                <MenubarMenu key={mIdx}>
                  <Link href={m.path}>
                    <DrawerClose asChild>
                      <MenubarTrigger className="cursor-pointer w-full">
                        {m.name}
                      </MenubarTrigger>
                    </DrawerClose>
                  </Link>
                </MenubarMenu>
              ))}
            </div>
            <DrawerFooter className="px-0">
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </Menubar>
  );
}
