import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Perrotat — Desarrollador .NET",
  description:
    "Portfolio de Juan Perrotat, Desarrollador .NET Full Stack especializado en C#, SQL Server y ASP.NET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${firaCode.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
