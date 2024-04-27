import Logo from "@/app/components/Logo";
import { ButtonWithIcon } from "@/app/components/ButtonWithIcon";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex container mx-auto pt-[2.44rem] px-4 xl:px-0">
      <div className="">
        <Logo />
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
