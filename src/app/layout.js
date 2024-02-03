import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello Shadcn UI",
  description: "Learning Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-7xl mx-auto py-8 px-16 space-y-3 ${inter.className}`}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
