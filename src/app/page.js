import Courses from "./components/courses";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="py-4">
      <Hero />
      <Courses />
    </main>
  );
}
