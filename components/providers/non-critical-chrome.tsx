"use client";

import dynamic from "next/dynamic";

const LazyCustomCursor = dynamic(
  () => import("@/components/ui/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false, loading: () => null }
);

export function NonCriticalChrome() {
  return <LazyCustomCursor />;
}