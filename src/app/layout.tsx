import type { Metadata } from "next";
import { Comfortaa, Quicksand } from "next/font/google";
import "./globals.css";
import Navigation from "../components/ui/Navigation";
import Providers from "./providers";

const comfortaa = Comfortaa({ variable: "--font-comfortaa", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const quicksand = Quicksand({ variable: "--font-quicksand", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Juliana Frausto - Obra Digital",
  description: "Espacio digital para la obra artística de Juliana Frausto",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${quicksand.variable} antialiased sacred-bg`}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
