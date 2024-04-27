"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function ArrowIcon(props) {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#181818"
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
}

const textVariants = {
  hover: {
    y: -30,
  },
};

export default function Card({ image, title, link }) {
  return (
    <motion.div whileHover="hover" className="">
      <div className="overflow-hidden relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
          <Image
            className="rounded-2xl h-full w-full object-cover object-center"
            src={image}
            width={1000}
            height={1000}
            alt="blog"
          />
        </div>
        <div className="py-4 flex flex-col h-28">
          <div className="h-8 overflow-hidden">
            <motion.h2
              variants={textVariants}
              className="text-xl font-bold text-gray-800 relative after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
              data-letter={title}
            >
              {title}
            </motion.h2>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-light text-slate-600 mt-2">
              Inspiration
            </p>
            {/* <a
              href={link}
              className="bg-[#B3B3B3] rounded-lg grid place-items-center px-1 py-1 hover:scale-105 hover:rotate-90 transition-transform duration-300 ease-in-out"
            >
              <ArrowIcon className="m-1 w-4 h-4" />
            </a> */}
          </div>
        </div>
        <a href={link} className="absolute inset-0 z-10 "></a>
      </div>
    </motion.div>
  );
}
