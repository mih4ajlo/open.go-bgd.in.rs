import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Header from "@/components/Header";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const titleStr = "Belgrade open 2025";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: titleStr,
  description: "Belgrade open 2025 in Belgrade, Serbia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className=" text-black">
        <main className="min-h-screen flex flex-col items-center mx-4 mt-20">
          <Menu />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
