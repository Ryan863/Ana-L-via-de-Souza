"use client";

import Image from "next/image";
import { MessageCircle, Heart, Shield, Sparkles, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent(
      "Olá, Dra. Ana Lívia! Gostaria de agendar uma consulta e conhecer o espaço de atendimento."
    );

  const pillars = [
    {
      icon: Heart,
      title: "Escuta Atenta e Sem Julgamentos",
      desc: "Um espaço seguro para falar abertamente sobre receios, dores íntimas, gestação e mudanças do corpo sem qualquer constrangimento.",
    },
    {
      icon: Shield,
      title: "Segurança Clínica & Baseada em Evidências",
      desc: "Tratamentos atualizados cientificamente, aplicados com delicadeza e respeitando o tempo e os limites anatômicos de cada mulher.",
    },
    {
      icon: Sparkles,
      title: "Ambiente 100% Privativo & Acolhedor",
      desc: "Consultório preparado para promover calma e tranquilidade, longe da impessoalidade hospitalar e com foco exclusivo no seu bem-estar.",
    },
    {
      icon: Clock,
      title: "Acompanhamento Contínuo",
      desc: "Cuidado dedicado desde a primeira conversa (anamnese) até a conquista da sua autonomia corporal e alta clínica.",
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#F7F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative line border */}
              <div className="absolute -inset-3 rounded-3xl border border-[#DECDBB] -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden bg-[#ECE1D4] shadow-[0_20px_45px_-12px_rgba(40,28,20,0.12)] border border-[#E3D6C6]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/dra-ana-livia.png"
                    alt="Dra. Ana Lívia de Souza - Fisioterapeuta Pélvica com modelo anatômico"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261C14]/40 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 bg-[#FAF7F2] border-t border-[#E3D8CB]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-xl font-medium text-[#241A14]">
                        Dra. Ana Lívia de Souza
                      </h4>
                      <p className="text-xs text-[#8C6239] font-medium tracking-wide uppercase mt-0.5">
                        Fisioterapeuta Pélvica · Saúde da Mulher
                      </p>
                    </div>
                    <span className="text-2xl">💖</span>
                  </div>
                  <p className="mt-3 text-xs text-[#6D5D51] leading-relaxed italic border-l-2 border-[#C68670] pl-3">
                    &ldquo;Saúde da mulher em todas as fases da vida. Cada mulher merece se sentir segura e dona do seu próprio corpo.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] mb-3 block">
              Acolhimento Humanizado
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241A14] font-medium leading-[1.14]">
              Um cuidado que respeita sua intimidade, seus medos e sua história.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#59493E] leading-relaxed">
              Muitas mulheres chegam ao consultório com receio, vergonha ou tendo ouvido durante anos que perdas de urina ou dores íntimas são &ldquo;normais após a gravidez&rdquo;.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[#6D5D51] leading-relaxed">
              O meu compromisso é desmistificar cada etapa com clareza, empatia e base técnica. Você sempre saberá exatamente o que estamos fazendo, por qual motivo e com a sua total permissão e conforto.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 pt-8 border-t border-[#E2D5C4]">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#EFE3D5] text-[#8C6239] flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#241A14] leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6D5D51] mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#261C14] hover:bg-[#3D2D21] text-[#FAF6F0] text-sm font-medium transition-all shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#E8D3C8]" />
                <span>Conversar com a Dra. Ana no WhatsApp</span>
              </a>

              <span className="text-xs text-[#7E6E62] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#8C6239]" />
                Atendimento com hora marcada em Herval d&apos;Oeste e Luzerna
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
