"use client";

import { useRouter } from "next/navigation";
import {startTransition} from "react";

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error,
  reset: () => void
}) {
  const router = useRouter();

  const reload = () => {
      router.refresh();
      reset();
  };

  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => startTransition(reload)}>Try again</button>
    </div>
  );
}