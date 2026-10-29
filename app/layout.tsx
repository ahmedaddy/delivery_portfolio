import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oussama Eloualy | Livraison à Chouiter & Marrakech",
  description: "Service de livraison rapide, sûr et fiable à Chouiter et Marrakech.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ar"><body>{children}</body></html>;
}
