import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonWithIcon({ link }) {
  return (
    <Button asChild className="my-4">
      <Link href={link}>
        {" "}
        Login with Email <SquareArrowOutUpRight className="ml-2 h-4 w-4" />{" "}
      </Link>
    </Button>
  );
}
