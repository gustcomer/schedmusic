import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists"
}

export default function ArtistList() {
  return (
    <>
      <h1>Artist List</h1>
      <h2>Artist 1</h2>
      <h2>Artist 2</h2>
      <h2>Artist 3</h2>
    </>
  )
}