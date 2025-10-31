import { Public_Sans } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "@/context/AlertContext"
import { RefreshProvider } from "@/context/RefreshContext"

const publicSans = Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const publicSansAsMono = Public_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Russi Acessorios",
  description: "Russi Acessorios",
};

export default function RootLayout({ children }) {
  return (
    <html className="" lang="en">
      <body className={`${publicSans.variable} ${publicSansAsMono.variable} antialiased`}>
        <AlertProvider>
          <RefreshProvider>
            {children}
          </RefreshProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
