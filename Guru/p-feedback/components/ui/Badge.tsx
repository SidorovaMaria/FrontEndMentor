import { cn } from "@/lib";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronUp, LucideIcon } from "lucide-react";
import React from "react";

export const badgeVariant = cva(
  "inline-flex items-center text-[13px] tracking-[-0.18px] font-bold transition-all duration-300 ease-in-out cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#F2F4FE] text-[#3A4374] hover:bg-[#CFD7FF] ",
        active: "bg-[#4661E6] text-[#FFFFFF]! hover:bg-[#CFD7FF] ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariant> {
  icon?: boolean;
  iconSrc?: LucideIcon;
  iconPosition?: "top" | "left";
}

export const Badge = ({
  className,
  variant,
  icon = false,
  iconPosition,
  iconSrc = ChevronUp,

  ...props
}: BadgeProps) => {
  const Icon = iconSrc;
  return (
    <div
      className={cn(
        badgeVariant({ variant }),
        iconPosition === "top" ? "flex-col" : "flex-row",
        icon ? "h-auto px-3 py-2" : "px-4 py-2 text-[#4661E6]",
        " inline-flex w-fit gap-0.5 rounded-[10px]  items-center justify-center ",
        className
      )}
      {...props}
    >
      {icon && (
        <Icon
          className={`${
            variant === "active" ? "text-white" : "text-[#4661E6]"
          }  size-4`}
        />
      )}
      {props.children}
    </div>
  );
};
