import type { Metadata } from "next";
import { Geist, Geist_Mono, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sortsMill = Sorts_Mill_Goudy({
  variable: "--font-sorts-mill",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Van Belleghem",
  description: "Florian Van Belleghem's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sortsMill.variable}`}
    >
      <body className="antialiased tracking-tight">
        <Noise />
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

function Noise() {
  return (
    <div className="absolute w-screen h-screen bg-[url('/noise.png')] bg-blend-multiply" />
  );
}
