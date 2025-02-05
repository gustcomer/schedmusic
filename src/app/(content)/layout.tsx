import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SchedMusic - Your Music Scheduler",
    template: "SchedMusic | %s",
    absolute: ""
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem"
        }}>
        <p>Header</p>
      </header>
      {children}
      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem"
        }}
        >
        <p>Footer</p>
      </footer>
    </>
  )
}