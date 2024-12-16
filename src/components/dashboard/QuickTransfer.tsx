import React, { useState } from "react";
import { ArrowRightIcon, SendIcon } from "../../icons";

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 4,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
  {
    id: 5,
    name: "Workman",
    role: "Designer",
    image: "https://via.placeholder.com/40", // Replace with the actual image URL
  },
];

export const QuickTransfer = () => {
  return (
    <div className="bg-white rounded-lg py-1 flex flex-col gap-y-7">
      <Carousel users={users} />

      {/* Input Section */}
      <div className="flex items-center space-x-1 w-full">
        <label htmlFor="amount" className="text-gray-400 flex-shrink-0">
          Write Amount
        </label>
        <div className="rounded-[50px] bg-[#EDF1F7] text-gray-800 flex-1 flex justify-between max-w-60 space-x-1 w-full">
          <input
            id="amount"
            type="text"
            className="bg-transparent outline-none border-none py-2 pl-7 w-full"
          />
          <button className="flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 bg-black text-white rounded-[50px] font-medium">
            <span>Send</span>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

type CarouselProps = {
  users: { id: number; name: string; role: string; image: string }[];
};
const Carousel = ({ users }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= users.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 items-start space-x-4 pr-20"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}>
          {users.map((user) => (
            <div
              key={user.id}
              className="flex-shrink-0 w-1/3 text-center space-y-4"
              style={{ flexBasis: "33.333%" }}>
              <img
                src={user.image}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
              <div className="">
                <p className="font-semibold text-gray-800 mt-2">{user.name}</p>
                <p className="text-sm text-blue-500">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        title="next"
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow focus:outline-none hover:bg-gray-200 size-10 flex items-center justify-center flex-shrink-0">
        <ArrowRightIcon />
      </button>
    </div>
  );
};
