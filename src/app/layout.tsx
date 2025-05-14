import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guuber Travel",
  description: "Easy ride-hailing at a moment's notice.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${inter.className} font-raleway bg-background text-text min-h-screen max-w-screen-sm p-4 text-base font-normal`}
    >
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
