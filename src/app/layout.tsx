import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compass Accounting | Modern bookkeeping and advisory",
  description:
    "Compass Accounting delivers streamlined bookkeeping, tax strategy, and CFO guidance for modern accounting firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
