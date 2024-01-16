import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth/AuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "MAYA: Build your Dream Team!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " relative max-w-screen-md mx-auto"}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
