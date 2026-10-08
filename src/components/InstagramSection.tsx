"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const instagramPosts = [
  {
    tag: "Gestação",
    title: "Como os exercícios respiratórios abrem espaço na pelve para o parto?",
    likes: "Cuidado & Técnica",
  },
  {
    tag: "Pós-Parto",
    title: "O que é o Tapping e por que ele traz tanto alívio no puerpério imediato?",
    likes: "Reabilitação",
  },
  {
    tag: "Uroginecologia",
    title: "Perder xixi ao espirrar NÃO é normal da idade: como tratar o assoalho pélvico.",
    likes: "Saúde Íntima",
  },
  {
    tag: "Rotina Clínica",
    title: "Bastidores do atendimento: como funciona a primeira consulta sem constrangimentos.",
    likes: "Acolhimento",
  },
];

export function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/fisioanaliviaf/";

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EC] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] mb-2.5 block">
              Conteúdo Educativo & Rotina
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241A14] font-medium leading-tight">
              Acompanhe no Instagram
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6D5D51]">
              Informação clara e acolhedora sobre o universo da fisioterapia pélvica e saúde da mulher.
            </p>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#241A14] border border-[#DDD0BF] hover:border-[#241A14] text-sm font-medium transition-all shadow-sm hover:shadow"
          >
            <InstagramIcon className="w-4 h-4 text-[#C68670]" />
            <span>@fisioanaliviaf</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </div>

        {/* Instagram Post Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5DACD] hover:border-[#C68670] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-[#8C6239] bg-[#FAF5EE] px-2.5 py-1 rounded-full border border-[#ECE0D0]">
                    {post.tag}
                  </span>
                  <InstagramIcon className="w-4 h-4 text-[#A8988B] group-hover:text-[#C68670] transition-colors" />
                </div>
                <h4 className="font-serif text-lg text-[#241A14] font-medium leading-snug group-hover:text-[#8C6239] transition-colors">
                  {post.title}
                </h4>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0E6D9] flex items-center justify-between text-xs text-[#8D7D71]">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#C68670]" />
                  {post.likes}
                </span>
                <span className="text-[#241A14] font-medium flex items-center gap-1 group-hover:underline">
                  Ver no perfil
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
