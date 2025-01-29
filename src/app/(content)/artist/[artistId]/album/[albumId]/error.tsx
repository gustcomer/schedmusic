"use client";

import { useRouter } from "next/navigation";

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
      <button onClick={reload}>Try again</button>
    </div>
  );
}