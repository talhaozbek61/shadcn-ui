"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Some Movement
  const sentence =
    "Hello visitors! I'm trying to learn the shadcn/ui library here, I hope I can do a good job.";
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.2 } }),
  };
  const words = sentence.split(" ");

  return (
    <div className="px-6 pt-14 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-52 md:py-56 lg:py-64">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-rick/50 hover:ring-rick/60">
            Learn <span className="text-rick font-semibold">shadcn/ui</span>{" "}
            with me
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hello Shadcn UI
          </h1>
          <motion.p
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} custom={i}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#courses"
              className="rounded-md bg-rick px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rick/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rickbg-rick flex gap-2 items-center group"
            >
              Explore
              <ArrowRight className="size-4 group-hover:translate-x-2 duration-300" />
            </Link>
            <a
              href="https://ui.shadcn.com/?ref=learning-shadcn-ui.vercel.app"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 group"
              target="_blank"
            >
              shadcn/ui
              <ArrowUpRight className="size-4 group-hover:scale-110 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
