"use client";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "../../components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";
import { Dot, MessageCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Comments({ comments }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const commentsVariants = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: isInView ? 0 : -100,
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
      id="comments"
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
      variants={commentsVariants}
      className="mt-16 sm:mt-24"
      ref={ref}
    >
      <div className="flex items-center justify-start gap-2">
        <MessageCircle className="size-7 stroke-rick" />
        <h2 className="text-3xl font-semibold text-gray-900">Comments</h2>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-6">
        {comments.results.map((result, rIdx) => (
          <Card
            key={rIdx}
            className="rounded-3xl p-4 space-y-4 group hover:shadow-md duration-500"
          >
            <CardHeader className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src={result.image} />
                <AvatarFallback>{result.name} Profil Image</AvatarFallback>
              </Avatar>
              <CardTitle className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground">
                <div className="flex flex-col">
                  <span className="text-gray-900 font-semibold">
                    {result.name}
                  </span>
                  <span>{result.location.name}</span>
                </div>
                <div className="flex items-center gap-0">
                  {result.status == "Alive" ? (
                    <Dot className="size-6 stroke-green-500" />
                  ) : result.status == "Dead" ? (
                    <Dot className="size-6 stroke-red-500" />
                  ) : (
                    <Dot className="size-6 stroke-gray-500" />
                  )}
                  <span>{result.id}h ago</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-900">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              officia natus nulla reprehenderit aliquid quisquam velit, hic
              corrupti facere aperiam iure vitae quidem molestias ullam! Non
              ullam quia suscipit magnam?
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
