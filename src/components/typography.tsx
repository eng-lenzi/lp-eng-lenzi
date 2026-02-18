import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const titleVariants = tv({
  base: "font-semibold tracking-tight text-foreground",
  variants: {
    size: {
      sm: "text-base",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "lg",
    tone: "default",
  },
});

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants>;

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, size, tone, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(titleVariants({ size, tone, className }))}
      {...props}
    />
  ),
);

Title.displayName = "Title";

const textVariants = tv({
  base: "text-sm text-foreground",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      subtle: "text-foreground/70",
    },
  },
  defaultVariants: {
    size: "sm",
    tone: "default",
  },
});

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, tone, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(textVariants({ size, tone, className }))}
      {...props}
    />
  ),
);

Text.displayName = "Text";

export { Title, Text };
