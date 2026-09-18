import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#14382B] text-white",
        secondary:
          "bg-[#F3ECE1] text-[#14382B] border border-[#E8DFD1]",
        outline:
          "border border-[#14382B] text-[#14382B]",
        gold:
          "bg-[#FAF4E6] text-[#8C651A] border border-[#E3CE9B]",
        organic:
          "bg-[#EBF3EE] text-[#154E35] border border-[#C6DFC9]",
        pill:
          "bg-white/80 backdrop-blur-md text-[#14382B] border border-white/40 shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
