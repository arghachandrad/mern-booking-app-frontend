import { Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <main className="flex-1">
        <Container isPaddingY={false}>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
