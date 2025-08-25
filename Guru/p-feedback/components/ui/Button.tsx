import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib";
import { ChevronLeft } from "lucide-react";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-0 disabled:opacity-50 rounded-[10px] cursor-pointer text-white text-sm font-bold",
  {
    variants: {
      variant: {
        pink: "bg-pink  hover:bg-[#c75af6]",
        blue: "bg-blue  hover:bg-[#7C91F9]",
        darkblue: "bg-blue-300  hover:bg-[#656EA3]",
        orange: "bg-[#D73737]  hover:bg-[#E98888]",
        arrow: "bg-transparent  hover:underline text-[#647196]",
        arrowdark: "bg-blue-300  hover:underline text-white",
      },
      size: {
        default: "h-10 px-4 py-2 ",
      },
      loading: { true: "aria-busy:opacity-70" },
      asChild: { true: "" },
    },
    defaultVariants: {
      variant: "darkblue",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild, size, loading, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, loading }), className)}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
        )}
        {(variant === "arrow" || variant === "arrowdark") && (
          <ChevronLeft
            className={`size-4 m-0 p-0 ${
              variant === "arrowdark" ? "text-[#CDD2EE] " : "text-[#4661E6]"
            }`}
          />
        )}
        {children}
      </Component>
    );
  }
);
Button.displayName = "Button";
