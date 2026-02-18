import { Toaster as Sonner, toast as sonnerToast } from "sonner";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

type ToastProps = React.ComponentProps<typeof Sonner>;

const toastVariants = tv({
  base: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
});

const toastDescriptionVariants = tv({
  base: "group-[.toast]:text-muted-foreground",
});

const toastActionVariants = tv({
  base: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
});

const toastCancelVariants = tv({
  base: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
});

const Toast = ({ className, ...props }: ToastProps) => {
  return (
    <Sonner
      theme="dark"
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast: toastVariants(),
          description: toastDescriptionVariants(),
          actionButton: toastActionVariants(),
          cancelButton: toastCancelVariants(),
        },
      }}
      {...props}
    />
  );
};

export { Toast, sonnerToast as toast };
