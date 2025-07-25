import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Modern Walk Header Implementation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}