import FooterSvg from "@/app/components/FooterSvg";
import GetInTouchSvg from "@/app/components/GetInTouchSvg";
import Link from "next/link";

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
        fill="#F7F7F7"
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <div className="bg-primary-black rounded-t-[40px]">
      <FooterSvg className="px-4 md:px-0 pt-24 pb sm:pt-24 sm:pb-16" />
      <div className="flex flex-col md:flex-row container mx-auto items-center">
        <div>
          <GetInTouchSvg />
        </div>
        <div className="flex-1">
          <ul className="text-4xl text-primary-white flex flex-col md:flex-row justify-center gap-4 py-8 md:py-0 md:gap-16">
            <li className="">
              <Link className="flex group" href="/about">
                About{" "}
                <span className="ml-2 overflow-hidden h-fit w-fit relative">
                  <ArrowIcon className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ" />
                  <ArrowIcon className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5" />
                </span>
              </Link>
            </li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
