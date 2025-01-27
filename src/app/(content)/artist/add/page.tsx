"use client"

import { useRouter } from "next/navigation";

export default function AddArtist() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Adding Artist");
    router.push("/")
  };

  return (
    <>
    <h1>Add Artist</h1>
    <button onClick={handleClick}>Add Artist</button>
    </>
  );

}