import { cn } from "@/utils";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-[#f7f8fd] rounded-[5px] h-[48px] px-6 py-3 text-[15px] border border-transaprent active:border-[#4661e6] invalid:border-[#D73737]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
