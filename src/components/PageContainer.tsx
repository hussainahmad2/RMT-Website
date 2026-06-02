import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Shared horizontal gutters — use on inner content inside full-bleed sections. */
export const PAGE_CONTAINER_CLASS = "page-container";

type PageContainerProps = ComponentProps<"div">;

export function PageContainer({ className, ...props }: PageContainerProps) {
  return <div className={cn(PAGE_CONTAINER_CLASS, className)} {...props} />;
}
