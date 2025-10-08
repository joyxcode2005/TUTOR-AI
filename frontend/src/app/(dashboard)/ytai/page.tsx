import React from "react";
import { Youtube, Eye, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";

const YtAI = () => {
  const courses = [
    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },
    // Duplicate if you want more
    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },
    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },
    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },

    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },

    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },

    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },

    {
      title: "Linear Algebra",
      provider: "freecodecamp",
      duration: "120 min",
      subscribers: "11.2M",
      views: "291",
      likes: "29K",
      comments: "4000",
      thumbnail: "/images/dummyyt.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3">
      {courses.map((course, i) => (
        <div
          key={i}
          className="bg-[#F3F3F3] rounded-xl w-75 shadow p-4 flex flex-col items-start"
        >
          {/* Thumbnail */}
          <div className="relative w-full">
            <Image
              src={course.thumbnail}
              alt={course.title}
              className="rounded-2xl w-full h-32 object-cover"
              height={128}
              width={320}
            />
            <span className="absolute bottom-2 right-2 bg-gradient-to-r from-[#0a5761] to-[#1193a49f] text-white text-xs px-2 py-1 rounded-full w-[30%] h-[20%] flex justify-center items-center font-[gilroy] font">
              <i>{course.duration}</i>
            </span>
          </div>

          {/* Title & provider */}
          <h3 className="mt-3 font-extrabold text-2xl font-[gilroy] ">
            {course.title}
          </h3>
          <p className="text-sm font-bold text-[#195D70] font-[gilroy]">
            {course.provider}
          </p>

          {/* Stats */}
          <div className="mt-3 space-y-1 text-sm text-[#757575] flex justify-between w-full">
            <div className="flex flex-col">
              <p className="flex items-center gap-2 font-[gilroy] ">
                <Youtube className="w-4 h-4 text-black " /> {course.subscribers}{" "}
                Subscribers
              </p>
              <p className="flex items-center gap-2 font-[gilroy]">
                <Eye className="w-4 h-4  text-black" /> {course.views} views
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-[gilroy]">
                <ThumbsUp className="w-4 h-4  text-black" /> {course.likes}{" "}
                likes
              </p>
              <p className="flex items-center gap-1 font-[gilroy]">
                <MessageCircle className="w-4 h-4  text-black" />{" "}
                {course.comments} comments
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mt-4 w-full justify-between">
            <button className="bg-[#073D44] text-white px-4 py-1 rounded-full text-md w-[48%] h-[5vh] flex justify-center items-center font-[arial]">
              Quiz
            </button>
            <button className="bg-[#0c727f] text-white px-4 py-1 rounded-full text-md w-[48%] h-[5vh] flex justify-center items-center font-[arial]">
              Chat
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YtAI;
