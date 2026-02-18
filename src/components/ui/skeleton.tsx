import * as React from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

const skeletonVariants = tv({
  base: "animate-pulse rounded-md bg-muted",
});

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn(skeletonVariants({ className }))} {...props} />;
}

export { Skeleton, skeletonVariants };
