import { merriweather, inter } from "./fonts"
import type React from "react" // Added import for React
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-col items-center min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}