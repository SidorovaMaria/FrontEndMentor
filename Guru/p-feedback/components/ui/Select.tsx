import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib";
import { cva } from "class-variance-authority";
import { Check, ChevronDown } from "lucide-react";
import React from "react";
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTriggerVariants = cva(
  " rounded-[5px] border border-transparent  h-12 font-bold ring-0!",
  {
    variants: {
      variant: {
        dark: "bg-[#373f68] text-white data-[placeholder]:text-[#f2f4fe] data-[state=open]:data-[placeholder]:text-[#f2f4febf]",
        light:
          "bg-[#f7f8fd] text-[#3a4374] data-[placeholder]:text-[#3A4374] focus:border-[#4661e6] active:border-[#4661e6]  ",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    variant?: "dark" | "light";
  }
>(({ className, variant = "light", children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default justify-between items-center gap-6 group  transition-all duration-300 ease-in disabled:cursor-not-allowed disabled:opacity-50 pl-6 pr-3 py-3 outline-none",
      variant && SelectTriggerVariants({ variant }),
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown
        className={`w-4 ${
          variant === "light" ? "text-[#4661e6]" : "text-white"
        } group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 transition-transform duration-300`}
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 w-full min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-[10px] max-h-[--radix-select-content-available-height] bg-white shadow-[0px_10px_40px_-7px] shadow-[#373f6859] flex flex-col data-[state=open]:animate-in data-[state=closed]:animate-out transition-all duration-300",

        className
      )}
      position="popper"
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          " w-full h-[var(--radix-select-trigger-height)]  min-w-[var(--radix-select-trigger-width)] "
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = "SelectContent";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer py-3 px-6 text-[#647196] items-center outline-none ring-0 border-b border-b-[#3a437426] data-[disabled]:opacity-50  hover:text-[#AD1FEA]",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center text-[#AD1FEA]">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText className="text-[#647196] text-base font-regular align-top!">
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
};
