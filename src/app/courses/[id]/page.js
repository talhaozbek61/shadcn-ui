import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";
import courses from "@/data/coursesData";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comments from "../_components/comments";

//  Get Data
const getData = async (id) => {
  const course = courses[id - 1];
  if (course) return course;
  else return notFound();
};
//  Get Comments
const getComments = async (page) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character//?page=${page}`
  );
  return res.json();
};

export async function generateMetadata({ params }) {
  const course = await getData(params.id);
  return {
    title: course.name,
  };
}

export default async function page({ params }) {
  const course = await getData(params.id);
  const comments = await getComments(params.id);

  return (
    <>
      <div className="grid lg:grid-cols-2 py-8 gap-4 text-gray-900">
        {/* Course Info */}
        <section className="space-y-6 max-lg:order-2">
          <div className="flex items-center justify-start">
            {[...Array(4).keys()].map((i) => (
              <Star
                key={i}
                className="size-5 stroke-yellow-400 fill-yellow-400 flex-shrink-0"
              />
            ))}
            <Star className="size-5 stroke-yellow-400 flex-shrink-0" />
          </div>
          {/* Header */}
          <h1 className="text-2xl font-semibold !mt-3">{course?.name}</h1>
          {/* Description */}
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            similique ut, accusantium incidunt mollitia velit? Sint obcaecati
            atque assumenda beatae dolorem sunt, reiciendis culpa ad. Rerum
            itaque quas perspiciatis odit!
          </p>
          {/* Skills */}
          <div className="grid grid-cols-2 gap-3">
            {course?.info.map((i, iIdx) => (
              <span className="flex items-center gap-x-2 text-sm" key={iIdx}>
                <i.icon className="w-6 h-6 text-rick flex-shrink-0" />
                <span>{i?.description}</span>
              </span>
            ))}
          </div>

          {/* Teacher */}
          <div className="flex items-center justify-start gap-4 text-sm py-4 border-t border-gray-200">
            <Avatar>
              <AvatarImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
              <AvatarFallback>Teacher Image</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start w-5/6 text-rick">
              <span>Toom Cook - Co-Founder / Physics</span>
              <p className="text-gray-900">
                Rick is a genius scientist who can create various energy
                weapons, force fields and complex scientific inventions.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="flex items-center justify-between gap-x-6">
            <Button className="w-full bg-rick/90 hover:bg-rick h-auto py-3 !rounded-3xl">
              Apply Now
            </Button>
            <Link
              href="#comments"
              className="border text-center hover:bg-accent rounded-3xl text-sm font-medium w-full px-4 py-3"
            >
              Comments
            </Link>
          </div>
        </section>
        {/* Course Image */}
        <section className="max-lg:order-1">
          <Image
            src="https://picsum.photos/seed/picsum/600/396"
            width={600}
            height={396}
            alt="Product Image"
            className="w-full h-auto rounded-3xl shadow-lg"
          />
        </section>
      </div>
      <Comments comments={comments} />
    </>
  );
}
