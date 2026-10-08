"use client";

import Image from "next/image";
import { MessageCircle, ArrowDown, Star, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function AuroraHero() {
  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent(
      "Olá, Dra. Ana Lívia! Vi seu site e gostaria de agendar uma consulta de fisioterapia pélvica."
    );

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F7F3EC]">
      {/* 21st Dev Inspired Warm Aurora Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-[#EFE0D3]/80 via-[#F3E7DC]/60 to-[#FCEFE8]/90 blur-[90px] rounded-full opacity-70 animate-pulse duration-[8000ms]" />
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#E7D6C5]/50 to-transparent blur-[100px] rounded-full opacity-60" />
        <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-[#F2DDD2]/50 to-transparent blur-[100px] rounded-full opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex-1 flex flex-col justify-center items-center">
        {/* Subtle Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE7DC]/90 border border-[#E0D3C1] text-[#241A14] text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#C68670] animate-pulse" />
          <span>Fisioterapia Pélvica · Saúde da Mulher em Todas as Fases</span>
        </motion.div>

        {/* Refined Serif Heading (Directly inspired by Image 2 editorial composition) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-[#241A14] font-medium max-w-4xl tracking-tight"
        >
          Cuidado acolhedor e especializado para a saúde da mulher.
        </motion.h1>

        {/* Subtitle with light elegant typography */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-base sm:text-lg md:text-xl text-[#6D5D51] max-w-2xl font-normal leading-relaxed"
        >
          Fisioterapia pélvica na gestação, pós-parto e em todas as fases da sua vida.
          Um espaço seguro, discreto e sem julgamentos.
        </motion.p>

        {/* Twin Editorial Pill Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#261C14] hover:bg-[#3D2D21] text-[#FAF6F0] text-sm sm:text-base font-medium shadow-[0_4px_16px_rgba(38,28,20,0.14)] hover:shadow-[0_6px_22px_rgba(38,28,20,0.22)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-[#E8D3C8]" />
            <span>Falar com a Dra. Ana Lívia via WhatsApp</span>
          </a>

          {/* Secondary Light Pill Button */}
          <a
            href="#areas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/80 hover:bg-[#FFFFFF] text-[#241A14] border border-[#DDD0BF] text-sm sm:text-base font-medium shadow-[0_2px_8px_rgba(38,28,20,0.04)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Conhecer Áreas de Cuidado</span>
          </a>
        </motion.div>

        {/* Hero Photo Presentation (Clean, Sophisticated Editorial Frame - Image 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative w-full max-w-3xl"
        >
          <div className="relative mx-auto rounded-3xl sm:rounded-[2rem] overflow-hidden p-2 sm:p-3 bg-gradient-to-b from-[#FAF7F2] to-[#ECE2D5] shadow-[0_20px_50px_-15px_rgba(50,36,26,0.12)] border border-[#E5DACD]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-[1.6rem] overflow-hidden bg-[#ECE2D5]">
              <Image
                src="/images/dra-ana-livia.png"
                alt="Dra. Ana Lívia de Souza - Fisioterapeuta Pélvica com modelo anatômico da pelve feminina"
                fill
                priority
                className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 850px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261C14]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-auto bg-[#FAF6F0]/95 backdrop-blur-md border border-[#E0D3C1] rounded-2xl px-4 py-2.5 shadow-lg flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49845] text-[#D49845]" />
                ))}
              </div>
              <div className="h-4 w-[1px] bg-[#DDD0BF]" />
              <div className="text-left">
                <p className="text-xs font-semibold text-[#241A14] leading-tight">
                  5,0 ★★★★★ no Google
                </p>
                <p className="text-[0.68rem] text-[#7E6E62] leading-tight">
                  Atendimento acolhedor e seguro
                </p>
              </div>
            </div>

            {/* City Badge */}
            <div className="hidden sm:flex absolute top-6 right-6 bg-[#261C14]/85 backdrop-blur-md text-[#FAF6F0] rounded-full px-3.5 py-1.5 text-xs font-medium items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8D3C8]" />
              <span>Herval d&apos;Oeste & Luzerna · SC</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Cue */}
      <div className="relative z-10 pt-8 flex justify-center">
        <a
          href="#areas"
          aria-label="Rolar para ver áreas de atuação"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-[#8D7D71] hover:text-[#241A14] transition-colors group"
        >
          <span>Role para conhecer</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
