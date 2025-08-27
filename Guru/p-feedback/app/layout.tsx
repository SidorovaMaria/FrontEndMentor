import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "Challenge for Front end Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.variable}  antialiased`}>
        <main className="md:max-w-[700px] mx-auto lg:max-w-5xl  md:mt-[56px] ">
          {children}{" "}
        </main>
      </body>
    </html>
  );
}
