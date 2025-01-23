import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>SchedMusic</h1>
      <Link href="/about">About</Link>      
      <Link href="/artist">Artists</Link>      
    </>
  );
}