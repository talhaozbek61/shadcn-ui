"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import ReactMarkdown from "react-markdown";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import { Calendar, Rocket, Tag } from "lucide-react";

export default function Page() {
  // Motion Setting
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

  const [releases, setReleases] = useState([]);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/talhaozbek61/shadcn-ui/releases"
        );
        const data = await res.json();
        setReleases(data);
      } catch (err) {
        console.log("Releases not found");
        setReleases({});
      }
    };

    fetchReleases();
  }, []);

  return (
    <motion.div
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
      variants={commentsVariants}
      ref={ref}
      className="px-6 py-24 sm:py-32 lg:px-8"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Releases
        </h1>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Release notes help you learn about the development of the software.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8">
        {releases.map((release, rIdx) => (
          <Card
            className="rounded-2xl p-4 space-y-4 group hover:shadow-md duration-500"
            key={release.id}
          >
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold text-foreground">
                {release.name}
              </CardTitle>
              {rIdx === 0 && (
                <div className="flex items-center gap-1 text-xs font-semibold text-rick animate-bounce">
                  <Rocket className="size-4 " />
                  <span>Latest</span>
                </div>
              )}
            </CardHeader>
            <CardDescription className="flex items-center gap-4 text-sm text-muted-foreground">
              <Avatar className="size-7">
                <AvatarImage src={release.author.avatar_url} />
                <AvatarFallback>
                  {release.author.login} Profil Image
                </AvatarFallback>
              </Avatar>
              <p className="-ml-2.5">{release.author.login} publishes</p>
              <Link
                href={release.html_url}
                target="_blank"
                className="flex items-center gap-1"
              >
                <Tag className="size-4" />
                <span>{release.tag_name}</span>
              </Link>
              <p className="flex items-center gap-1">
                <Calendar className="size-4" />
                <span>
                  {new Date(release.published_at).toLocaleDateString()}
                </span>
              </p>
            </CardDescription>
            <hr />
            <CardContent className="prose mt-4">
              <ReactMarkdown>{release.body}</ReactMarkdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
