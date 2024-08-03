"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import courses from "@/data/coursesData";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Boxes, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="courses"
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
      variants={sectionVariants}
    >
      <div className="flex items-center justify-center gap-2">
        <Boxes className="size-8 stroke-rick" />
        <h2 className="text-4xl font-semibold text-gray-900">Courses</h2>
      </div>
      <div
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 py-6"
        ref={ref}
      >
        {courses.map((courses, cIdx) => (
          <Card className="max-w-xl rounded-3xl" key={cIdx}>
            <CardHeader>
              <Image
                src={"https://picsum.photos/seed/picsum/380/224"}
                width={380}
                height={224}
                alt="Product Image"
                className="w-full h-56 rounded-t-3xl"
              />
              <CardTitle className="mt-4 flex items-center justify-between px-4">
                <Link
                  href={"/courses/" + (cIdx + 1).toString()}
                  className="text-gray-900 hover:text-gray-600 duration-300"
                >
                  <span>{courses.name}</span>
                </Link>
                <Badge className="">{courses.price}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 divide-y divide-gray-200">
              <p className="text-muted-foreground py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, provident.
              </p>
              <div className="flex items-center justify-between py-4">
                <span className="flex items-center gap-x-2 text-sm">
                  <Star className="size-5 text-rick flex-shrink-0" />
                  <span>4.3</span>
                </span>
                {courses.info.map((i, iIdx) => (
                  <span
                    className="flex items-center gap-x-2 text-sm"
                    key={iIdx}
                  >
                    <i.icon className="size-5 text-rick flex-shrink-0" />
                    <span>{i.description}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-start gap-4 text-sm py-4">
                <Avatar>
                  <AvatarImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                  <AvatarFallback>Teacher Image</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span>Toom Cook</span>
                  <span>Co-Founder / Physics</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
