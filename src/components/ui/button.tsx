import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "~/lib/utils"

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button"

  // Only pass through the className - no default Tailwind styles
  return (
    <Comp
      data-slot="button" 
      className={cn(className)}
      {...props}
    />
  )
}

export { Button }
