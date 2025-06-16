import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construtora Alicerce | Construindo Sonhos com Solidez Familiar",
  description: "Há 15 anos transformando terrenos em lares únicos em Passo Fundo/RS. Especializada em residenciais de médio e alto padrão com garantia de 5 anos.",
  keywords: "construtora, passo fundo, residencial, alto padrão, construção, obras, alicerce",
  authors: [{ name: "Construtora Alicerce" }],
  openGraph: {
    title: "Construtora Alicerce | Construindo Sonhos com Solidez Familiar",
    description: "Há 15 anos transformando terrenos em lares únicos em Passo Fundo/RS",
    type: "website",
    locale: "pt_BR",
    siteName: "Construtora Alicerce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
