import { cn } from "@/utils/cn";
import { Button as MuiButton } from "@mui/material";
import Link from "next/link";
import type React from "react";
import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<typeof MuiButton> {
  children?: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MuiButton
      {...props}
      className={cn(
        "bg-secondary text-zinc-50  px-5 py-2 rounded-md font-semibold w-full hover:bg-secondary/90",
        props.className,
      )}
    >
      {children}
    </MuiButton>
  );
}

export function ButtonLink({
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "bg-secondary text-zinc-50  px-5 py-2 rounded-md font-semibold w-full hover:bg-secondary/90",
        props.className,
      )}
    >
      {children}
    </Link>
  );
}
