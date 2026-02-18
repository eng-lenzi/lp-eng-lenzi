import * as React from "react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { Text } from "@/components/typography";

const attributeRootVariants = tv({
  base: "flex flex-col gap-3",
});

const attributeRowVariants = tv({
  base: "flex items-start justify-between gap-4",
});

type AttributeRootProps = React.HTMLAttributes<HTMLDivElement>;

function AttributeRoot({ className, ...props }: AttributeRootProps) {
  return (
    <div className={cn(attributeRootVariants({ className }))} {...props} />
  );
}

type AttributeBaseProps = {
  label: string;
  className?: string;
};

type AttributeStringProps = AttributeBaseProps & {
  value?: string | null;
};

function AttributeString({ label, value, className }: AttributeStringProps) {
  return (
    <div className={cn(attributeRowVariants({ className }))}>
      <Text className="text-sm text-muted-foreground">{label}</Text>
      <Text className="text-sm">{value ?? "-"}</Text>
    </div>
  );
}

type AttributeNumberProps = AttributeBaseProps & {
  value?: number | null;
};

function AttributeNumber({ label, value, className }: AttributeNumberProps) {
  return (
    <div className={cn(attributeRowVariants({ className }))}>
      <Text className="text-sm text-muted-foreground">{label}</Text>
      <Text className="text-sm">{value ?? "-"}</Text>
    </div>
  );
}

type AttributeBooleanProps = AttributeBaseProps & {
  value?: boolean | null;
  trueLabel?: string;
  falseLabel?: string;
};

function AttributeBoolean({
  label,
  value,
  trueLabel = "Yes",
  falseLabel = "No",
  className,
}: AttributeBooleanProps) {
  const displayValue =
    value === null || value === undefined
      ? "-"
      : value
        ? trueLabel
        : falseLabel;

  return (
    <div className={cn(attributeRowVariants({ className }))}>
      <Text className="text-sm text-muted-foreground">{label}</Text>
      <Text className="text-sm">{displayValue}</Text>
    </div>
  );
}

type AttributeListProps = AttributeBaseProps & {
  value?: Array<string | number> | null;
  separator?: string;
};

function AttributeList({
  label,
  value,
  separator = ", ",
  className,
}: AttributeListProps) {
  const displayValue = value && value.length > 0 ? value.join(separator) : "-";

  return (
    <div className={cn(attributeRowVariants({ className }))}>
      <Text className="text-sm text-muted-foreground">{label}</Text>
      <Text className="text-sm">{displayValue}</Text>
    </div>
  );
}

export const Attribute = {
  Root: AttributeRoot,
  String: AttributeString,
  Number: AttributeNumber,
  Boolean: AttributeBoolean,
  List: AttributeList,
};
