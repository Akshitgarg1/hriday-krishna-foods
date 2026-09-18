import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#14382B] text-white hover:bg-[#0D261C] shadow-sm hover:shadow-md",
        outline:
          "border border-[#14382B] text-[#14382B] bg-transparent hover:bg-[#14382B]/5",
        secondary:
          "bg-[#F3ECE1] text-[#14382B] hover:bg-[#E8DFD1] border border-[#E8DFD1]",
        ghost:
          "text-[#14382B] hover:bg-[#14382B]/5 hover:text-[#0D261C]",
        gold:
          "bg-[#C59B4B] text-[#121915] font-semibold hover:bg-[#B08638] shadow-sm hover:shadow-md",
        goldOutline:
          "border border-[#C59B4B] text-[#C59B4B] hover:bg-[#C59B4B]/10",
        white:
          "bg-white text-[#14382B] hover:bg-[#FAF7F2] shadow-sm font-medium",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm rounded-full",
        sm: "h-9 px-4 py-2 text-xs rounded-full",
        lg: "h-13 px-8 py-3.5 text-base rounded-full",
        icon: "h-10 w-10 rounded-full p-0 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
