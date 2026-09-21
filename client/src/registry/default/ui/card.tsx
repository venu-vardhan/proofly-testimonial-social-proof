"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type React from "react";
import { cn } from "@/registry/default/lib/utils";

export function Card({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("relative flex flex-col rounded-2xl border bg-card text-card-foreground shadow-xs/5", className), "data-slot": "card" }, props), render });
}
export function CardHeader({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 p-6", className), "data-slot": "card-header" }, props), render });
}
export function CardTitle({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("font-heading font-semibold text-lg leading-none", className), "data-slot": "card-title" }, props), render });
}
export function CardDescription({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("text-muted-foreground text-sm", className), "data-slot": "card-description" }, props), render });
}
export function CardPanel({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("flex-1 p-6", className), "data-slot": "card-panel" }, props), render });
}
export function CardFooter({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("flex items-center p-6", className), "data-slot": "card-footer" }, props), render });
}
export function CardAction({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement {
  return useRender({ defaultTagName: "div", props: mergeProps<"div">({ className: cn("col-start-2 row-span-2 row-start-1 inline-flex self-start justify-self-end", className), "data-slot": "card-action" }, props), render });
}
export { CardPanel as CardContent };
