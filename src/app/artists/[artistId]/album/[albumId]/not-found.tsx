"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const artistId = pathname.split("/")[2];
  const albumId = pathname.split("/")[4];

  //   console.log({ pathname, productId, reviewId });
  return (
    <div>
      <h2>
        Album {albumId} not found for Artist {artistId}
      </h2>
    </div>
  );
}