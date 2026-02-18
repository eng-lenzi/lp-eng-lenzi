import * as React from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { Text, Title } from "@/components/typography";

const emptyStateVariants = tv({
  base: "flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-background p-8 text-center",
});

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn(emptyStateVariants({ className }))}>
      {icon && <div className="text-muted-foreground">{icon}</div>}
      <Title size="md">{title}</Title>
      {description && <Text tone="muted">{description}</Text>}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
}

export { EmptyState };
