import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artists"
}

export default function ArtistList() {
  const artistId = 10;
  return (
    <>
      <h1>Artist List</h1>
      <h2><Link href="/artist/1">Artist 1</Link></h2>
      <h2><Link href="/artist/2">Artist 2</Link></h2>
      <h2><Link href="/artist/3" replace>Artist 3</Link></h2>
      <h2><Link href={`/artist/${artistId}`}>Artist {artistId}</Link></h2>
    </>
  )
}