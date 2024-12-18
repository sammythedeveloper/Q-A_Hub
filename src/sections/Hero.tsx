import banner from "@/assets/images/banner.jpg";
import Image from "next/image";
// import underline from "@/assets/images/underline.svg?url";
import { Button } from "@/components/Button";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
export const Hero = () => {
  return (
    <section className="">
      <div className="container">
        <div className=" border-l border-r border-[var(--color-border)]">
          <div className=" container py-24 md:py-36 lg:py-48 relative isolate overflow-hidden [mask-image:liner-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className=" absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10 ">
              <div className=" absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className="size-[600px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className="size-[850px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className="size-[1100px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className="size-[1350px]" />
              </div>
            </div>
            <h1 className=" text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Curiosity meets clarity. Collaborate seamlessly and empower ideas.
            </h1>
            <p className=" text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto ">
              Ignite innovation, share insights, and build solutions. Your
              ultimate hub for
            </p>
            <div className=" flex justify-center ">
              <Button variant="secondary" className=" mt-10">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className=" absolute left-1/2 top-0 ">
                <Planet
                  size="lg"
                  color="white"
                  className=" -translate-x-[316px] -translate-y-[76px] rotate-135 "
                />
                <Planet
                  size="md"
                  color="blue"
                  className=" translate-x-[334px] -translate-y-[188px] -rotate-135 "
                />
                   <Planet
                  size="lg"
                  color="green"
                  className=" translate-x-[508px] -translate-y-[372px] -rotate-135 "
                />
                     <Planet
                  size="sm"
                  color="orange"
                  className=" -translate-x-[488px] -translate-y-[342px] rotate-135 "
                />
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden ">
                <div className="absolute left-1/2 top-0"></div>
                <Image src={banner} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
