import AnimatedDaySelector from "@/components/AnimatedDaySelector";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AnimatedDaySelector />
      <Image
        src="/images/roadmap-line.png"
        alt="Roadmap Line"
        width={200}
        height={500}
        className="m-8"
      />
    </div>
  );
}

export default page;
