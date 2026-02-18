import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";

const overlayVariants = tv({
  base: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
});

const contentVariants = tv({
  base: "fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg outline-none",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const headerVariants = tv({
  base: "flex flex-col space-y-1.5 text-center sm:text-left",
});

const footerVariants = tv({
  base: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
});

const titleVariants = tv({
  base: "text-lg font-semibold leading-none tracking-tight",
});

const descriptionVariants = tv({
  base: "text-sm text-muted-foreground",
});

const Modal = Dialog.Root;
const ModalTrigger = Dialog.Trigger;
const ModalClose = Dialog.Close;

const ModalContent = React.forwardRef<
  React.ComponentRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content> &
    VariantProps<typeof contentVariants>
>(({ className, children, size, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className={cn(overlayVariants())} />
    <Dialog.Content
      ref={ref}
      className={cn(contentVariants({ size, className }))}
      {...props}
    >
      {children}
      <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
        <X className="size-4" />
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
));
ModalContent.displayName = Dialog.Content.displayName;

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(headerVariants({ className }))} {...props} />
);

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(footerVariants({ className }))} {...props} />
);

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn(titleVariants({ className }))}
    {...props}
  />
));
ModalTitle.displayName = Dialog.Title.displayName;

const ModalDescription = React.forwardRef<
  React.ComponentRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, ref) => (
  <Dialog.Description
    ref={ref}
    className={cn(descriptionVariants({ className }))}
    {...props}
  />
));
ModalDescription.displayName = Dialog.Description.displayName;

export {
  Modal,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
};
