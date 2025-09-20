import InputField from "@/components/InputField";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <InputField label="email" placeholder="Enter your email" />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#073D44] text-white p-12 h-screen relative overflow-hidden gap-12">
        <div className="absolute top-40 -right-60 blur-[100px] w-250 h-40 bg-gradient-to-b from-[#37787E] via-white to-[#5BCAD4] -rotate-45 z-10 rounded-2xl"></div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl">
            Revolutionize Education With Smarter Automation
          </h2>
          <p className="text-lg mt-4 font-light">
            Smarter automation isn’t just the future of education, it’s the
            present – transforming classrooms into intelligent spaces for
            growth.
          </p>
        </div>
        <Image
          src="/images/einstein.png"
          alt="einstein"
          width={267}
          height={267}
          className="z-20"
        />
        <div>
          <Image
            src="/images/quotes.png"
            alt="quotes"
            width={20}
            height={20}
            className=""
          />
          <p className="ml-5 text-2xl">
            Education is not the learning of facts, but the training of the mind
            to think.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
