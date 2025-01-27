import Link from "next/link";

export const metadata = {
  title: 'SchedMusic | About Page'
}

export default async function About() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000)
  });
  return (
    <>
      <h1>About page</h1>
      <Link href="/">Home</Link>
    </>
  );
}