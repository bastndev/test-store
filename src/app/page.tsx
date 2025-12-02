import Carousel from "../components/extra/carousel";
import { ThemeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 dark:bg-black font-sans relative overflow-hidden transition-colors duration-300">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-500/20 dark:bg-blue-900/20 dark:gradient-glow pointer-events-none blur-3xl" />

      <main className="max-w-3xl mx-auto flex flex-col items-center p-4 gap-6 relative z-10">
        <div className="self-end">
          <ThemeToggle />
        </div>

        {/* section */}
        <section>
          <Carousel />
        </section>
      </main>
    </div>
  );
}
