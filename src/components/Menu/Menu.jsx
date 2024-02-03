import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export default function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger className="cursor-pointer">Home</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="login">
          <MenubarTrigger className="cursor-pointer">Login</MenubarTrigger>
        </Link>
      </MenubarMenu>
    </Menubar>
  );
}
