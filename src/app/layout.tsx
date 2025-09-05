import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "150 Salmos Explicados | Receba no WhatsApp | Instituto Fundamentos Cristão",
  description: "📖 150 SALMOS EXPLICADOS versículo por versículo. Compreensão profunda da Palavra de Deus. Acesso imediato via WhatsApp. Por apenas R$19,90.",
  keywords: ["salmos explicados", "whatsapp", "bíblia", "estudo bíblico", "material cristão", "instituto fundamentos cristão", "tiktok"],
  authors: [{ name: "Instituto Fundamentos Cristão" }],
  openGraph: {
    title: "150 Salmos Explicados - Receba no WhatsApp",
    description: "📖 Compreensão profunda e prática da Palavra de Deus. Explicações fáceis de entender. Acesso imediato via WhatsApp.",
    url: "https://salmosexplicados.com",
    siteName: "Instituto Fundamentos Cristão",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "150 Salmos Explicados - Receba no WhatsApp",
    description: "📖 Compreensão profunda e prática da Palavra de Deus. Explicações fáceis de entender.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
