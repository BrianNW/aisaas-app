import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI SASS",
<<<<<<< HEAD
  description: "AI Powered Image Generator",
=======
  description: "AI powered image generator",
>>>>>>> 9a8d93f179e5e2309aa43d539b8497456604e1e4
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
