import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ButtonWithIcon({
  link,
  target,
  className,
  name,
  IconComponent,
}) {
  return (
    <Button asChild className={className}>
      {link ? (
        <Link href={link} target={target}>
          {name}
          <IconComponent className="h-4 w-4 ml-2" />
        </Link>
      ) : (
        <span className="flex items-center gap-2">
          {name}
          <IconComponent className="h-4 w-4" />
        </span>
      )}
    </Button>
  );
}
