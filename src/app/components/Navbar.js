import Logo from "@/app/components/Logo";

export default function Navbar() {
  return (
    <div className="flex container mx-auto pt-[2.44rem] px-4 md:px-0">
      <div className="">
        <Logo />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
