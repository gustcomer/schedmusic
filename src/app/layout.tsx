import { Metadata } from "next";

import "./styles.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}