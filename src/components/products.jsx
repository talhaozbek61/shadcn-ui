import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/productsData";

export default function Products() {
  return (
    <>
      <h2 className="text-4xl font-semibold mt-6" id="products">
        Products
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 py-6">
        {products.map((product, pIdx) => (
          <Card
            className="sm:max-w-[330px] sm:mx-auto group md:hover:shadow-xl duration-500"
            key={pIdx}
          >
            <CardHeader>
              <Image
                src={"https://picsum.photos/seed/picsum/320/224"}
                width={320}
                height={224}
                alt="Product Image"
                className="w-full h-56 rounded-md"
              />
              <CardTitle className="mt-3">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, provident.
              </p>
              {product.info.map((i, iIdx) => (
                <span className="flex items-center gap-x-2 text-sm" key={iIdx}>
                  <i.icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <span>{i.description}</span>
                </span>
              ))}
              <Link
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
                href={"/product/" + (pIdx + 1).toString()}
              >
                Register Now
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
