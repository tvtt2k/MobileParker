import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./RootComponents/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobil home locator",
  description: "An app built using next.js to locate mobile homes with the help of google maps api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
