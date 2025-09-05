import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { ApolloWrapper } from "@/apollo/ApolloWrapper";

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
        <ApolloWrapper>
          <NavBar />
          <main className="p-6">{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
