import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "7 Passive Income Investments That Pay Monthly",
  description: "Discover 7 powerful investments that can generate monthly passive income, even if you're a complete beginner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
