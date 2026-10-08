"use client";

import { Star, Quote, CheckCircle2, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  author: string;
  role: string;
  quote: string;
  highlight: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    author: "Rejane Miotto",
    role: "Paciente de Fisioterapia Pélvica",
    quote:
      "Cheguei com receio, mas fui acolhida com muito carinho, respeito e profissionalismo. Durante todo o tratamento me senti à vontade e bem orientada. Percebi uma grande melhora e sou imensamente grata por todo o cuidado recebido.",
    highlight: "Acolhida com muito carinho, respeito e profissionalismo",
    verified: true,
  },
  {
    author: "Estefani Ebert",
    role: "Paciente de Cuidado Clínico",
    quote:
      "Profissional extremamente atenciosa, competente e acolhedora. Desde a primeira consulta me fez sentir muito confortável e segura, ela explica tudo com clareza. Você percebe a dedicação em cada detalhe.",
    highlight: "Me fez sentir muito confortável e segura, explica tudo com clareza",
    verified: true,
  },
  {
    author: "Tatiane",
    role: "Paciente de Reabilitação",
    quote:
      "Excelente profissional, desde a anamnese até a alta do tratamento. Super recomendo a todas as mulheres que buscam uma fisioterapeuta de confiança.",
    highlight: "Excelente profissional desde a anamnese até a alta",
    verified: true,
  },
  {
    author: "Gabrielli Ferreira de Souza",
    role: "Paciente de Saúde da Mulher",
    quote:
      "Muito cuidadosa, dedicada e atenciosa no seu trabalho, tive uma experiência maravilhosa. O acolhimento fez toda a diferença no meu resultado.",
    highlight: "Muito cuidadosa, dedicada e atenciosa, experiência maravilhosa",
    verified: true,
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-[#FFFFFF] border-y border-[#E9DFD2]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EE] border border-[#E2D5C4] text-[#8C6239] text-xs font-semibold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D49845] text-[#D49845]" />
              <span>Avaliações Reais do Google</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241A14] font-medium leading-tight">
              O que dizem as mulheres que passaram pelo consultório
            </h2>
          </div>

          {/* Google 5.0 Badge */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E3D6C6] shrink-0 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-[#DDD0BF] text-2xl font-bold font-serif text-[#241A14]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49845] text-[#D49845]" />
                ))}
                <span className="ml-1 text-sm font-bold text-[#241A14]">5.0</span>
              </div>
              <p className="text-xs text-[#7E6E62] mt-0.5 font-medium">
                Classificação Máxima no Google Meu Negócio
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-9 rounded-3xl bg-[#FAF7F2] border border-[#E5DACD] flex flex-col justify-between hover:border-[#D0C0AF] transition-all hover:shadow-[0_12px_32px_-8px_rgba(40,28,20,0.06)] relative group"
            >
              <div className="absolute top-7 right-8 text-[#E2D4C3] group-hover:text-[#D5C2AD] transition-colors">
                <Quote className="w-10 h-10 opacity-60" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D49845] text-[#D49845]" />
                  ))}
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#8C6239] mb-3">
                  &ldquo;{item.highlight}&rdquo;
                </div>

                <blockquote className="font-serif text-lg sm:text-xl text-[#3A2B21] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 mt-6 border-t border-[#EAE0D3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8DDD0] flex items-center justify-center font-serif font-semibold text-[#241A14]">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#241A14]">
                      {item.author}
                    </h3>
                    <p className="text-xs text-[#7E6E62]">{item.role}</p>
                  </div>
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 text-[0.72rem] text-[#4F7355] font-medium bg-[#EEF5EF] px-2.5 py-1 rounded-full border border-[#D5E5D8]">
                    <CheckCircle2 className="w-3 h-3" />
                    Google Verificado
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
