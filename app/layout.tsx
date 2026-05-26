import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aayush Rathod | Senior Java Backend Developer",
  description: "Senior Java Backend Developer & Production Support Specialist with 8+ years of experience in Banking and Financial Systems.",
  keywords: ["Senior Java Backend Developer Toronto", "Production Support Specialist Canada", "Oracle PL/SQL Developer Toronto", "Banking Software Engineer Canada", "ETL Developer Toronto"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
