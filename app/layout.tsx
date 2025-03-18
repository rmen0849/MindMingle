import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mind Mingle",
  description: "Community-Based Psychological Challenges Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-gray-100 text-black">
        {/* ✅ 确保 Navbar 背景色正确 */}
        <div className="bg-blue-900 text-white">
          <Navbar />
        </div>

        <main className="flex-grow bg-white">{children}</main> {/* ✅ 确保内容区域居中 */}

        {/* ✅ 确保 Footer 背景色正确 */}
        <div className="bg-blue-900 text-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
