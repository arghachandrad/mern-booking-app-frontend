import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peacestay.com",
  description:
    "Hotels — Choose From a Wide Range of Properties Which Peacestay.com Offers.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
