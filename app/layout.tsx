import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'ÉTOILE MAPUTO | Alta Gastronomia & Marisco de Moçambique",
  description: "Restaurante de luxo em Maputo, Av. da Marginal. Lagosta de Pemba, Camarão da Baía à Laurentina, Matapa Imperial, Frango à Zambeziana e vinhos de reserva.",
  keywords: "restaurante maputo, alta gastronomia moçambique, camarão laurentina, matapa imperial, marisco maputo, polana, av marginal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-MZ" className="dark scroll-smooth">
      <body className="bg-black text-gray-100 antialiased selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
