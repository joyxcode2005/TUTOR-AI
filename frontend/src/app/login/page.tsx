import InputField from "@/components/InputField";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5 justify-center items-start">

      <div>
          <h1 className="font-medium text-3xl">Welcome Back!</h1>
          <p className="text-[#8C8C8C]">Sign in to access your dashboard and continue optimizing your learning process.
          </p>
      </div>


       <div className="w-full flex flex-col gap-4">
          <InputField label="Email" placeholder="Enter your email" />
          <InputField label="Password" placeholder="Enter Your Password" />
       </div>


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
