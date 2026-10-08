"use client";

import { MapPin, Navigation, Clock, Phone, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function LocationsSection() {
  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent(
      "Olá, Dra. Ana Lívia! Gostaria de verificar os horários disponíveis para atendimento em Herval d'Oeste ou Luzerna."
    );

  const locations = [
    {
      city: "Herval d'Oeste – SC",
      region: "Centro",
      cep: "CEP 89610-000",
      description: "Consultório central com estacionamento facilitado e ambiente 100% privativo.",
      query: "Centro, Herval d'Oeste - SC, 89610-000",
      hours: "Segunda a Sexta · Com hora marcada",
    },
    {
      city: "Luzerna – SC",
      region: "Atendimento Clínico",
      cep: "Região Central",
      description: "Espaço silencioso e acolhedor para cuidados pélvicos e preparo gestacional.",
      query: "Luzerna - SC",
      hours: "Horários dedicados semanais · Agendamento prévio",
    },
  ];

  return (
    <section id="locais" className="py-24 sm:py-32 bg-[#FFFFFF] border-y border-[#E9DFD2]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] mb-3 block">
            Presencial & Exclusivo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241A14] font-medium leading-tight">
            Onde a Dra. Ana Lívia Atende
          </h2>
          <p className="mt-3 text-base text-[#6D5D51]">
            Consultórios preparados com discrição e conforto em Santa Catarina.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc, index) => {
            const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              loc.query
            )}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#E5DACD] flex flex-col justify-between hover:border-[#D0C0AF] transition-all hover:shadow-[0_12px_32px_-8px_rgba(40,28,20,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#EFE3D5] text-[#8C6239] flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8C6239] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E0D3C1]">
                      {loc.region}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#241A14]">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[#8D7D71] font-mono mt-0.5">{loc.cep}</p>

                  <p className="mt-4 text-sm text-[#6D5D51] leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#EAE0D3] space-y-2 text-xs text-[#59493E]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8C6239] shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#8C6239] shrink-0" />
                      <span>Vagas limitadas para acompanhamento individual</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white hover:bg-[#F2ECE3] text-[#241A14] border border-[#D5C6B3] text-xs sm:text-sm font-medium transition-colors shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-[#8C6239]" />
                    <span>Ver no Google Maps (Rota GPS)</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Conversion Banner */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto rounded-3xl bg-[#261C14] text-[#FAF6F0] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle warm glow background */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#8C6239]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#C68670]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E8D3C8] mb-3 block">
              Agendamento Fácil & Humanizado
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium leading-tight">
              Dê o primeiro passo para o seu bem-estar e liberdade corporal.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#D4C3B5] leading-relaxed">
              Fale diretamente pelo WhatsApp para tirar dúvidas sobre a consulta, valores e horários disponíveis. Você será atendida com todo o respeito e atenção.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF6F0] hover:bg-white text-[#241A14] text-sm sm:text-base font-semibold transition-all shadow-lg hover:scale-[1.02] active:scale-98"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Agendar pelo WhatsApp Oficial: (54) 98425-3363</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-[#A8988B]">
              Atendimento sigiloso · Retorno ágil em horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
