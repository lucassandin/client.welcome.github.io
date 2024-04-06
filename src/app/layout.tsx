import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-br">
      <body className={`flex min-h-screen flex-col items-center flex-start gap-24 p-24 ${inter.className}`}>{children}</body>
    </html>
  );
}
