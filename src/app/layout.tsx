import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://draanalivia.com.br"),
  title: "Dra. Ana Lívia de Souza | Fisioterapia Pélvica & Saúde da Mulher",
  description:
    "Cuidado acolhedor e especializado para a saúde da mulher em todas as fases da vida. Fisioterapia pélvica na gestação, preparo para o parto, recuperação pós-parto e tratamento de disfunções em Herval d'Oeste e Luzerna - SC.",
  keywords: [
    "fisioterapia pélvica",
    "saúde da mulher",
    "preparo para o parto",
    "recuperação pós-parto",
    "fisioterapia gestante",
    "tapping pós-parto",
    "assoalho pélvico",
    "incontinência urinária",
    "Dra. Ana Lívia de Souza",
    "Herval d'Oeste",
    "Luzerna",
    "Santa Catarina",
  ],
  authors: [{ name: "Dra. Ana Lívia de Souza" }],
  openGraph: {
    title: "Dra. Ana Lívia de Souza | Fisioterapia Pélvica",
    description: "Saúde da mulher em todas as fases da vida. Atendimento acolhedor em Herval d'Oeste e Luzerna - SC.",
    url: "https://draanalivia.com.br",
    siteName: "Dra. Ana Lívia de Souza - Fisioterapia Pélvica",
    images: [
      {
        url: "/images/dra-ana-livia.png",
        width: 800,
        height: 800,
        alt: "Dra. Ana Lívia de Souza - Fisioterapeuta Pélvica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Ana Lívia de Souza - Fisioterapia Pélvica",
    "image": "https://draanalivia.com.br/images/dra-ana-livia.png",
    "telephone": "+5554984253363",
    "url": "https://draanalivia.com.br",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Centro",
        "addressLocality": "Herval d'Oeste",
        "addressRegion": "SC",
        "postalCode": "89610-000",
        "addressCountry": "BR",
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Luzerna",
        "addressRegion": "SC",
        "addressCountry": "BR",
      },
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.1852,
      "longitude": -51.4984,
    },
    "medicalSpecialty": "Physiotherapy",
    "priceRange": "$$",
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-19:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48",
    },
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F3EC] text-[#59493E] font-sans antialiased selection:bg-[#261C14] selection:text-[#FAF6F0]">
        {children}
      </body>
    </html>
  );
}
