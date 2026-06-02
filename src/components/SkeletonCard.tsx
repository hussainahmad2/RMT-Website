import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton-shimmer rounded-md",
        className
      )}
    />
  );
}

export function SkeletonServiceCard() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
      <div className="flex items-start gap-4">
        <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
        <div className="flex-1 space-y-2 pt-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3.5 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-3.5 w-full" />
      <Skeleton className="h-3.5 w-5/6" />
      <Skeleton className="h-3.5 w-4/6" />
      <div className="flex flex-wrap gap-2 pt-1">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

export function SkeletonProjectCard() {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-9 w-32 rounded-lg mt-2" />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="min-h-[360px] bg-foreground/5 flex items-center">
      <div className="page-container py-20 space-y-6">
        <Skeleton className="h-4 w-40 mx-auto rounded-full" />
        <Skeleton className="h-14 w-2/3 mx-auto" />
        <Skeleton className="h-14 w-1/2 mx-auto" />
        <Skeleton className="h-5 w-3/4 mx-auto" />
        <Skeleton className="h-5 w-2/3 mx-auto" />
      </div>
    </div>
  );
}

export function SkeletonJobCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 space-y-3">
      <div className="flex items-center gap-4">
        <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-2/3" />
          <div className="flex gap-3">
            <Skeleton className="h-3.5 w-20 rounded-full" />
            <Skeleton className="h-3.5 w-24 rounded-full" />
          </div>
        </div>
        <Skeleton className="w-5 h-5 rounded shrink-0" />
      </div>
    </div>
  );
}
