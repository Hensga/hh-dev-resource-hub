"use client";
import { motion, useMediaQuery } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// const textVariants = {
//   hover: {
//     y: -30,
//   },
// };

export default function Card({ image, title, link, filter }) {
  return (
    <motion.div
      whileHover="hover"
      className="group hover:scale-105 transition-all ease-in-out duration-300"
    >
      <div className="overflow-hidden relative">
        <div className="aspect-h-10 aspect-w-16 w-full overflow-hidden">
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
              // variants={textVariants}
              className="md:text-xl font-bold text-gray-800 relative md:after:absolute md:after:left-0 md:after:top-full md:after:content-[attr(data-letter)]"
              data-letter={title}
            >
              {title}
            </motion.h2>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xs md:text-lg text-slate-600 mt-2">
              <div className="h-[6px] w-[6px] rounded-full bg-indigo-600"></div>
              {filter}
            </div>
            {/* <a
              href={link}
              className="bg-[#B3B3B3] rounded-lg grid place-items-center px-1 py-1 hover:scale-105 hover:rotate-90 transition-transform duration-300 ease-in-out"
            >
              <ArrowIcon className="m-1 w-4 h-4" />
            </a> */}
          </div>
        </div>
        <Link
          href={link}
          aria-label={title}
          className="absolute inset-0 z-10 "
        ></Link>
      </div>
    </motion.div>
  );
}
