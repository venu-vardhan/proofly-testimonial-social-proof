"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/default/lib/utils";
import { Spinner } from "@/registry/default/ui/spinner";

export const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 data-loading:select-none data-loading:text-transparent sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
  {
    defaultVariants: { size: "default", variant: "default" },
    variants: {
      size: {
        default: "h-9 px-[calc(--spacing(3)-1px)] sm:h-8", icon: "size-9 sm:size-8", "icon-lg": "size-10 sm:size-9", "icon-sm": "size-8 sm:size-7", "icon-xl": "size-11 sm:size-10", "icon-xs": "size-7 rounded-md sm:size-6", lg: "h-10 px-[calc(--spacing(3.5)-1px)] sm:h-9", sm: "h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:h-7", xl: "h-11 px-[calc(--spacing(4)-1px)] text-lg sm:h-10 sm:text-base", xs: "h-7 gap-1 rounded-md px-[calc(--spacing(2)-1px)] text-sm sm:h-6 sm:text-xs"
      },
      variant: {
        default: "border-primary bg-primary text-primary-foreground shadow-primary/24 shadow-xs hover:bg-primary/90 data-pressed:bg-primary/90",
        destructive: "border-destructive bg-destructive text-white shadow-destructive/24 shadow-xs hover:bg-destructive/90",
        "destructive-outline": "border-input bg-popover text-destructive-foreground shadow-xs/5 hover:border-destructive/32 hover:bg-destructive/4",
        ghost: "border-transparent text-foreground hover:bg-accent data-pressed:bg-accent",
        link: "border-transparent text-foreground underline-offset-4 hover:underline",
        outline: "border-input bg-popover text-foreground shadow-xs/5 hover:bg-accent/50",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90"
      }
    }
  }
);

export interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  loading?: boolean;
}

export function Button({ className, variant, size, render, children, loading = false, disabled: disabledProp, ...props }: ButtonProps): React.ReactElement {
  const isDisabled = Boolean(loading || disabledProp);
  const defaultProps = {
    children: <>{children}{loading && <Spinner className="pointer-events-none absolute" data-slot="button-loading-indicator" />}</>,
    className: cn(buttonVariants({ className, size, variant })),
    "aria-disabled": loading || undefined,
    "data-loading": loading ? "" : undefined,
    "data-slot": "button",
    disabled: isDisabled,
    type: render ? undefined : "button"
  };
  return useRender({ defaultTagName: "button", props: mergeProps<"button">(defaultProps, props), render });
}
