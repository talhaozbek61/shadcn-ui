import Comments from "@/components/comments";
import { Button } from "@/components/ui/button";
import products from "@/data/productsData";
import Image from "next/image";

const getData = async (id) => {
  const product = products[id - 1];
  return product;
};

export default async function page({ params }) {
  const product = await getData(params.id);
  return (
    <>
      <div className="grid lg:grid-cols-2 py-8 gap-4">
        <section className="space-y-5 my-auto max-lg:order-2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            similique ut, accusantium incidunt mollitia velit? Sint obcaecati
            atque assumenda beatae dolorem sunt, reiciendis culpa ad. Rerum
            itaque quas perspiciatis odit!
          </p>

          <div className="grid grid-cols-2 gap-3">
            {product.info.map((i, iIdx) => (
              <span className="flex items-center gap-x-2 text-sm" key={iIdx}>
                <i.icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <span>{i.description}</span>
              </span>
            ))}
          </div>

          <Button className="w-full bg-[#2563eb] hover:bg-[#2563eb]/90 !mt-10">
            Apply Now
          </Button>
          <Button variant="outline" className="w-full">
            Request more information
          </Button>
        </section>
        <section className="max-lg:order-1">
          <Image
            src="https://picsum.photos/seed/picsum/568/375"
            width={568}
            height={375}
            alt="Product Image"
            className="w-full h-auto rounded-lg"
          />
        </section>
      </div>
      <Comments />
    </>
  );
}
