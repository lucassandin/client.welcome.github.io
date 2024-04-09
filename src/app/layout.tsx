import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="pt-br">
      <body 
        className={`flex min-h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
