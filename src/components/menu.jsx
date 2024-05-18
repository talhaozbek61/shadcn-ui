import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

export default function Menu() {
  return (
    <Menubar>
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
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/#products">
          <MenubarTrigger className="cursor-pointer">Products</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/donate">
          <MenubarTrigger className="cursor-pointer">Donation</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/contact">
          <MenubarTrigger className="cursor-pointer">Contact</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
