import InputField from "@/components/InputField";
import Image from "next/image";

const page = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-5 justify-center items-start">

        <div className="flex items-center gap-3 absolute top-5 left-5">
          <img src="/images/logo.png" alt="" className="w-[30%]"/>
          <span className="font-bold text-[#073D44] text-3xl">Tutor.AI</span>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-7 mt-16">
          <div className="w-full flex flex-col justify-center items-center mb-6">
            <div className="w-[60%]">
              <h1 className="font-medium text-3xl">Welcome Back!</h1>
              <p className="text-[#8C8C8C]">Sign in to access your dashboard and continue optimizing your learning process.
              </p>
            </div>
          </div>


          <form className="w-full flex flex-col gap-4 justify-center items-center">
            <InputField label="Email" placeholder="Enter your email" />
            <div className="flex flex-col w-full items-center gap-1">
              <InputField label="Password" placeholder="Enter Your Password" />
              <div className="w-[60%] flex justify-end">
                <span className="text-[0.75rem]">Don’t have an account? <a href="" className="font-bold text-[#03181a]">Create now</a></span>
              </div>
            </div>


            <input type="submit" className="bg-[#073D44] w-[60%] h-12 rounded-[15px] text-white flex justify-center items-center" value="Sign in" />


          </form>

          <div className="flex justify-center items-center gap-3 w-full mt-7">
            <div>
              <img src="/images/Line_2.png" alt="" className="w-50" />
            </div>
            <span className="text-[#8C8C8C] font-medium">Or</span>
            <div>
              <img src="/images/Line_1.png" alt="" className="w-50" /></div>
          </div>


          <div className="flex justify-center w-full gap-5 mt-4">
            <a href="#" className="flex justify-center items-center"><img src="/images/Google.png" alt="" className="w-[70%]" /></a>
            <a href="#" className="flex justify-center items-center"><img src="/images/Facebook.png" alt="" className="w-[70%]" /></a>
            <a href="#" className="flex justify-center items-center"><img src="/images/Apple.png" alt="" className="w-[70%]" /></a>
          </div>
        </div>


      </div>



      <div className="flex flex-col items-center justify-center bg-[#073339] text-white p-12 h-screen relative overflow-hidden gap-12">
        <div className="absolute top-40 -right-60 blur-[100px] w-250 h-40 bg-gradient-to-b from-[#37787E] via-[#94dde3] to-[#5BCAD4] -rotate-45 z-10 rounded-2xl"></div>
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
