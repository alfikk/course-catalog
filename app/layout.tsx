import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies — semester project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-950">
        <header className="bg-white border-b border-slate-200">
          <nav className="flex gap-4 px-6 py-4 border-b border-slate-200">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Home
            </Link>
            <Link href="/courses" className="px-3 py-2 rounded-md hover:bg-slate-100">
              Courses
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-slate-100">
              About
            </Link>
          </nav>
        </header>
        <div className="flex flex-col flex-1">{children}</div>
      </body>
    </html>
  );
}
