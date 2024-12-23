import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const inter = IBM_Plex_Sans({ 
  subsets: ["latin"], 
weight: ['400', '500', '600', '700'],
variable: '--font-ibm-plex-sans' });

export const metadata: Metadata = {
  title: "AI SASS",
  description: "AI Powered Image Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn}>{children}</body>
    </html>
  );
}
