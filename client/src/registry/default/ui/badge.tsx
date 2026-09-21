"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/registry/default/lib/utils";

export const badgeVariants = cva("relative inline-flex shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-64", { defaultVariants: { size: "default", variant: "default" }, variants: { size: { default: "h-5.5 min-w-5.5 px-1 text-sm sm:h-4.5 sm:text-xs", lg: "h-6.5 min-w-6.5 px-1.5 text-base sm:h-5.5 sm:text-sm", sm: "h-5 min-w-5 rounded px-1 text-xs sm:h-4 sm:text-[.625rem]" }, variant: { default: "bg-primary text-primary-foreground", destructive: "bg-destructive text-white", error: "bg-destructive/8 text-destructive-foreground", info: "bg-info/8 text-info-foreground", outline: "border-input bg-background text-foreground", secondary: "bg-secondary text-secondary-foreground", success: "bg-success/8 text-success-foreground", warning: "bg-warning/8 text-warning-foreground" } } });

export interface BadgeProps extends useRender.ComponentProps<"span"> { variant?: VariantProps<typeof badgeVariants>["variant"]; size?: VariantProps<typeof badgeVariants>["size"]; }
export function Badge({ className, variant, size, render, ...props }: BadgeProps): React.ReactElement { return useRender({ defaultTagName: "span", props: mergeProps<"span">({ className: cn(badgeVariants({ className, size, variant })), "data-slot": "badge" }, props), render }); }
