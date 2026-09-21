"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";
import { cn } from "@/registry/default/lib/utils";

export type InputProps = Omit<InputPrimitive.Props & React.RefAttributes<HTMLInputElement>, "size"> & { size?: "sm" | "default" | "lg" | number; unstyled?: boolean; nativeInput?: boolean };

export function Input({ className, size = "default", unstyled = false, nativeInput = false, style, ...props }: InputProps): React.ReactElement {
  const inputClassName = cn("h-8.5 w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] text-foreground outline-none placeholder:text-muted-foreground/72 sm:h-7.5", size === "sm" && "h-7.5 px-[calc(--spacing(2.5)-1px)] sm:h-6.5", size === "lg" && "h-9.5 sm:h-8.5", props.type === "file" && "text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm");
  const wrapper = cn(!unstyled && "relative inline-flex w-full rounded-lg border border-input bg-background text-base shadow-xs/5 ring-ring/24 transition-shadow has-focus-visible:border-ring has-disabled:opacity-64 has-focus-visible:ring-[3px] sm:text-sm", className) || undefined;
  return <span className={wrapper} data-size={size} data-slot="input-control">{nativeInput ? <input className={inputClassName} data-slot="input" size={typeof size === "number" ? size : undefined} style={typeof style === "function'" ? undefined : style} {...props} /> : <InputPrimitive className={inputClassName} data-slot="input" size={typeof size === "number" ? size : undefined} style={style} {...props} />}</span>;
}
export { InputPrimitive };
