import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/Auth";
import { MyProvider } from "@/components/user/context";
import { UserOrderProvider } from "@/components/user/UserOrderProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Team2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <UserOrderProvider>
          <MyProvider>
            <body className={inter.className}>{children}</body>
          </MyProvider>
        </UserOrderProvider>
      </AuthProvider>
    </html>
  );
}
