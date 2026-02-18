import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground",
      secondary: "border-transparent bg-secondary text-secondary-foreground",
      outline: "text-foreground",
      success: "border-transparent bg-emerald-600 text-white",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground",
    },
    size: {
      sm: "text-[0.65rem]",
      md: "text-xs",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
