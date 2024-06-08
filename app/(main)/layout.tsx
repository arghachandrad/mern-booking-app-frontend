import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
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
        <Providers>
          <div className="flex flex-col w-full h-screen">
            <Navbar />
            <Hero />
            <main className="flex-1">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
