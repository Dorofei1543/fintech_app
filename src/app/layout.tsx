import ThemeProvider from "@/fsd/app/providers/ThemeProvider/ui/ThemeProvider";
import GiteIcon from "@mui/icons-material/Gite";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <header>
              <Link href="/">
                <GiteIcon />
              </Link>
              <Link href="/registration">Registration</Link>
              <Link href="/login">Login</Link>
            </header>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
