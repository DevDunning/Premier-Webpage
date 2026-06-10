import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Components/layout/Navbar";
import Footer from "@/app/Components/layout/Footer";

export const metadata: Metadata = {
  title: "Premier Furniture | McKenzie & Union City TN",
  description:
    "Furniture and mattress showroom serving all West Tennessee. Financing available upon approval, free local delivery, haul-away service, and top national brands.",
  keywords: [
    "furniture store Tennessee",
    "McKenzie furniture store",
    "Union City furniture",
    "West TN mattresses",
    "Ashley Serta Beautyrest furniture",
  ],
  openGraph: {
    title: "Premier Furniture",
    description: "Furniture, mattresses, financing, and delivery in West Tennessee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111827] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}