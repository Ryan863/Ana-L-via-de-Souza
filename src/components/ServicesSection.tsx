"use client";

import Image from "next/image";
import { MessageCircle, CheckCircle2, ArrowRight, HeartHandshake, Baby, Activity } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  icon: typeof Baby;
  image: string;
  shortDesc: string;
  details: string[];
  waMessage: string;
}

const services: ServiceItem[] = [
  {
    id: "gestacao",
    tag: "Fase Gestacional",
    title: "Preparo para o Parto & Gestação",
    icon: Baby,
    image: "/images/pregnancy-prep.jpg",
    shortDesc:
      "Alívio de sobrecargas lombares e preparação ativa do assoalho pélvico para um parto mais seguro, consciente e humanizado.",
    details: [
      "Alívio de dores lombares, ciáticas e na sínfise púbica",
      "Consciência corporal e mobilidade da pelve para o parto",
      "Massagem perineal e prevenção de lacerações severas",
      "Treinamento de respiração e posturas facilitadoras de alívio",
    ],
    waMessage:
      "Olá, Dra. Ana Lívia! Gostaria de saber mais sobre o Preparo para o Parto e Fisioterapia na Gestação.",
  },
  {
    id: "pos-parto",
    tag: "Puerpério & Reabilitação",
    title: "Recuperação Pós-Parto & Tapping",
    icon: HeartHandshake,
    image: "/images/physio-care.jpg",
    shortDesc:
      "Reabilitação muscular segura e confortável da musculatura pélvica, recuperação abdominal e aplicação de bandagem terapêutica (Tapping).",
    details: [
      "Avaliação e tratamento individualizado da diástase abdominal",
      "Aplicação de Tapping para conforto imediato e suporte visceral",
      "Recuperação da força e flexibilidade do assoalho pélvico",
      "Retorno gradual e seguro aos exercícios e rotina diária",
    ],
    waMessage:
      "Olá, Dra. Ana Lívia! Gostaria de agendar uma avaliação pós-parto e entender sobre o Tapping.",
  },
  {
    id: "uroginecologia",
    tag: "Saúde Integral da Mulher",
    title: "Tratamento de Disfunções Pélvicas",
    icon: Activity,
    image: "/images/clinic-interior.jpg",
    shortDesc:
      "Abordagem discreta, respeitosa e baseada em evidências científicas para incontinência, urgência miccional e desconfortos íntimos.",
    details: [
      "Incontinência urinária de esforço (ao tossir, rir ou pular)",
      "Urgência miccional e sensação frequente de bexiga cheia",
      "Tratamento de dores na relação sexual (vaginismo / dispareunia)",
      "Sensação de peso pélvico ou prolapso de órgãos pélvicos",
    ],
    waMessage:
      "Olá, Dra. Ana Lívia! Gostaria de conversar com discrição sobre tratamento para disfunção pélvica.",
  },
];

export function ServicesSection() {
  const getWhatsappUrl = (msg: string) =>
    `https://wa.me/5554984253363?text=${encodeURIComponent(msg)}`;

  return (
    <section id="areas" className="py-24 sm:py-32 bg-[#FFFFFF] border-y border-[#E9DFD2]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header with Refined Editorial Heading (Image 2 Inspired) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] mb-3 block">
            Cuidado Especializado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241A14] font-medium leading-[1.15]">
            Áreas de Atuação & Cuidado Pélvico
          </h2>
          <p className="mt-4 text-[#6D5D51] text-base sm:text-lg leading-relaxed">
            Cada etapa da vida da mulher exige um olhar individualizado. Do preparo para receber seu bebê ao tratamento de sintomas silenciosos, oferecemos condutas baseadas em evidências clínicas.
          </p>
        </div>

        {/* 3 Editorial Cards Grid (Directly mirroring the clean proportion of Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col justify-between rounded-3xl bg-[#FAF7F2] border border-[#E5DACD] overflow-hidden hover:border-[#D0C0AF] transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(40,28,20,0.08)]"
              >
                <div>
                  {/* Photo Frame with Clean Warm Filter */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D6]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A14]/30 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.72rem] font-semibold tracking-wide uppercase text-[#5A4537] border border-[#DDD0BF]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#EFE7DC] flex items-center justify-center text-[#8C6239]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#241A14] font-medium leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[#6D5D51] text-sm leading-relaxed mb-6">
                      {item.shortDesc}
                    </p>

                    {/* Checkmarks */}
                    <div className="space-y-2.5 pt-4 border-t border-[#EAE0D3]">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#544439]">
                          <CheckCircle2 className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="px-7 pb-7 pt-2">
                  <a
                    href={getWhatsappUrl(item.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#261C14] hover:bg-[#3D2D21] text-[#FAF6F0] text-xs sm:text-sm font-medium transition-all group-hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8D3C8]" />
                    <span>Agendar para esta área</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Informational Editorial Callout */}
        <div className="mt-14 sm:mt-18 rounded-2xl bg-[#F7F2EB] border border-[#E2D5C4] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl text-[#241A14] font-medium">
              Não sabe exatamente qual é o seu caso?
            </h4>
            <p className="text-sm text-[#6D5D51] mt-1.5 leading-relaxed">
              Disfunções do assoalho pélvico e sintomas pós-parto são frequentes, mas não devem ser tratados como normais. Converse diretamente com a Dra. Ana Lívia para uma orientação acolhedora.
            </p>
          </div>
          <a
            href={getWhatsappUrl("Olá, Dra. Ana Lívia! Tenho dúvidas sobre os sintomas que sinto e gostaria de uma orientação inicial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#241A14] border border-[#D5C6B3] hover:border-[#241A14] text-sm font-medium transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#C68670]" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
