import Image from "next/image";
import Shuffle from "@/components/Shuffle";
import SplitText from "@/components/SplitText";

export default function Home() {
  return (
    <div className=" h-screen">
      <SplitText
        text="Sajilo Digital"
        className="text-4xl font-semibold block! text-left!"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <Shuffle
        text="Your Vision, Our Innovation"
        shuffleDirection="left"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
      />
    </div>
  );
}
