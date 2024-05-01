import Products from "@/components/products";

export default function Home() {
  return (
    <main className="py-4">
      <h1 className="text-4xl font-semibold">Hello Shadcn UI</h1>
      <p className="text-sm max-lg:font-semibold lg:text-lg leading-8 py-4">
        Hello visitors, I&apos;m trying to learn shadcn/ui here. I hope i can do
        a good job.
      </p>
      <Products />
    </main>
  );
}
