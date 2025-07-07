import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        kuwum:
          "bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]/90 active:bg-[#F5F5F5]/80 flex justify-center items-center rounded-[3vw] sm:rounded-[2.514vw] md:rounded-[1.178vw] lg:rounded-[0.729vw] px-[6vw] sm:px-[5.556vw] md:px-[2.604vw] lg:px-[1vw] py-[4.5vw] sm:py-[4.167vw] md:py-[1.7vw] lg:py-[1vw] mt-[4vw] md:mt-[2vw] lg:mt-0 w-auto md:w-auto lg:w-[25vw] min-w-fit max-w-full transition-all duration-200 ease-in-out touch-manipulation",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        kuwum: "h-9 px-4 py-2", // Override default padding for kuwum variant
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
