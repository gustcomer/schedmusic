"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href:"/register" },
  { name: "Login", href:"/login" },
  { name: "Forgot Password", href:"/forgot-password" },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <>
      <header
        style={{
          backgroundColor: "darkorange",
          padding: "0.5rem"
        }}>
        {navLinks.map(link => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" } href={link.href} key={link.name}>
              {link.name}
            </Link>
          );
        })}
      </header>
      {children}
      <p>{pathname}</p>
      <footer
        style={{
          backgroundColor: "darkorange",
          padding: "0.5rem"
        }}
        >
        <p>Footer</p>
      </footer>
    </>
  )
}