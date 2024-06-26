import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Rocha - Fullstack Developer",
  description: "Meu site",
};

export default function LocaleLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang='en-us' dir="ltr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
