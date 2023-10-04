import Header from "@/components/main/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/main/Footer";
import "@/components/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imam's Shop",
  description: "Buy Anything, Anytime, Anywhere!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </header>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
