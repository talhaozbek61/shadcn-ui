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
      <body className={inter.className}>
        <ShadcnAlert />
        <Menu />
        {children}
      </body>
    </html>
  );
}
