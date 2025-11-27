import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorldShine Mining Company Ltd",
  description: "Your trusted gateway to Tanzania's mining sector. Enabling global investors with licences, partnerships, and operational support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
