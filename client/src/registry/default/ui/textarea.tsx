"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import type * as React from "react";
import { cn } from "@/registry/default/lib/utils";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & React.RefAttributes<HTMLTextAreaElement> & { size?: "sm" | "default" | "lg" | number; unstyled?: boolean };

export function Textarea({ className, size = "default", unstyled = false, ref, ...props }: TextareaProps): React.ReactElement {
  return <span className={cn(!unstyled && "relative inline-flex w-full rounded-lg border border-input bg-background text-base shadow-xs/5 ring-ring/24 transition-shadow has-focus-visible:border-ring has-disabled:opacity-64 has-focus-visible:ring-[3px] sm:text-sm", className)} data-size={size} data-slot="textarea-control">
    <FieldPrimitive.Control ref={ref} value={props.value} defaultValue={props.defaultValue} disabled={props.disabled} id={props.id} name={props.name} render={(defaultProps: React.ComponentProps<"textarea">) => (
      <textarea className={cn("field-sizing-content min-h-17.5 w-full rounded-[inherit] px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1.5)-1px)] text-foreground outline-none placeholder:text-muted-foreground/72", size === "sm" && "min-h-16.5 px-[calc(--spacing(2.5)-1px)] py-1", size === "lg" && "min-h-18.5 py-2")} data-slot="textarea" {...defaultProps} {...props} />
    )} />
  </span>;
}
export { FieldPrimitive };
