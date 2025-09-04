import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports App",
  description: "Athletes, Events, and Teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
