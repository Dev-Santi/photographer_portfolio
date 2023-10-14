import "./globals.css";
import type { Metadata } from "next";
import { hkGrotesk } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Alicia Doe",
  description: "Portafolio web de demostración para fotógrafos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={hkGrotesk.className}>{children}</body>
    </html>
  );
}
