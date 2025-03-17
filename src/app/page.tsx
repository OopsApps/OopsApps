import SupportCard from "@/components/cards/SupportCard";
import Showcase from "@/components/common/Showcase";
import ImageCard from "@/components/ui/image-card";
import Marquee from "@/components/ui/marquee";
import { products } from "@/constants/products";
import { supportLinks } from "@/constants/supportLinks";

export default function Home() {
  return (
    <main className="space-y-10 mt-10">
      <section
        id="header"
        className="h-screen flex flex-col justify-center items-center border-b-2 border-border"
      >
        <h3 className="text-6xl font-bold max-w-xl text-center">
          Oops, We Made Apps
        </h3>
        <span className="mt-4 font-semibold text-lg text-secondary">
          And somehow, they work... mostly
        </span>
        <div className="max-w-xs md:max-w-2xl">
          <Marquee items={products} />
        </div>
      </section>

      <section
        id="projects"
        className="h-full flex flex-col gap-4 justify-center items-center border-b-2 border-border"
      >
        <h3 className="text-6xl mt-20 font-bold max-w-2xl text-center">
          How You Can Support OopsApps
        </h3>
        <p className="max-w-2xl text-center text-gray-600">
          We love making stuff but let’s be real, this whole thing runs on
          copious amounts of caffeine, late-night debugging, and the occasional
          existential crisis. Here’s how you can help us keep the chaos going:
        </p>
        <Showcase />
      </section>

      <section
        id="about"
        className="h-full flex flex-col gap-4 justify-center items-center border-b-2 border-border"
      >
        <h3 className="text-6xl mt-20 font-bold max-w-2xl text-center">
          Who Let Us Cook?
        </h3>
        <span className="font-semibold text-lg text-secondary">
          AKA: About OopsApps
        </span>
        <p className="max-w-2xl text-center text-gray-600">
          OopsApps started because… well, we thought,{" "}
          {'"Hey, what if we made apps?"'} And then we did. And somehow, maybe
          people will actually start using them. Now we’re here, cooking up tech
          that works (mostly), fueled by caffeine, questionable coding
          decisions, and pure ✨vibes✨
        </p>
        <h3 className="text-4xl font-bold max-w-2xl text-center">
          Our Oops-Philosophy
        </h3>
        <p className="max-w-2xl text-center text-gray-600">
          We believe in fun, functional, and slightly broken software. If it
          works? Great. If it crashes? Even better, because that means we get to
          fix it (or pretend we’re working on it). OopsApps isn’t just about
          building things... it’s about breaking them first to see what happens.
        </p>
        <h3 className="text-4xl font-bold max-w-2xl text-center">
          Meet the {'"'}Chefs{'"'}
        </h3>
        <div className="mb-20">
          <ImageCard
            imageUrl="https://iconical.dev/laith.webp"
            caption="Head Chef - Laith"
          />
        </div>
      </section>

      <section
        id="tip"
        className="h-full flex flex-col gap-4 justify-center items-center"
      >
        <h3 className="text-6xl mt-20 font-bold max-w-2xl text-center">
          How You Can Support OopsApps
        </h3>
        <p className="max-w-2xl text-center text-gray-600">
          We love making stuff but let’s be real, this whole thing runs on
          copious amounts of caffeine, late-night debugging, and the occasional
          existential crisis. Here’s how you can help us keep the chaos going:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {supportLinks.map((lk, idx) => (
            <SupportCard
              key={`${lk.title}-${idx}`}
              title={lk.title}
              description={lk.description}
              buttonTitle={lk.buttonTitle}
              icon={lk.icon}
              href={lk.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
