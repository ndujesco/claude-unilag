import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Builder Club UNILAG",
  description: "Building the future with AI at the University of Lagos. Powered by Claude and Anthropic.",
  openGraph: {
    title: "Claude Builder Club UNILAG",
    description: "Building the future with AI at the University of Lagos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
