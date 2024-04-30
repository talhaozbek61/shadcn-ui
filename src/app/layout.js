import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu";
import ShadcnAlert from "@/components/shadcnAlert";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hello Shadcn UI",
  description: "Learning Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-7xl mx-auto p-2 sm:px-8 md:px-16 space-y-3 ${inter.className}`}
      >
        <ShadcnAlert />
        <Menu />
        {children}
      </body>
    </html>
  );
}
