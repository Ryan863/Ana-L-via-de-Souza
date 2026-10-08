"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Preciso de encaminhamento médico para passar em consulta?",
    answer:
      "Não é obrigatório. O fisioterapeuta é um profissional de primeiro contato devidamente habilitado para realizar avaliação, diagnóstico funcional e traçar o plano terapêutico. Contudo, trabalhamos em constante diálogo com seu obstetra ou ginecologista quando necessário.",
  },
  {
    question: "Como funciona a primeira consulta? Vou sentir dor ou constrangimento?",
    answer:
      "A primeira sessão é dedicada a uma escuta atenta e detalhada da sua rotina, histórico de saúde e objetivos (anamnese). Qualquer avaliação física só é realizada após explicação prévia, com seu total consentimento e com respeito absoluto aos seus limites e conforto. A fisioterapia pélvica não deve ser dolorosa.",
  },
  {
    question: "A partir de quantas semanas de gestação posso iniciar o acompanhamento?",
    answer:
      "Geralmente recomendamos iniciar a partir do segundo trimestre (por volta da 14ª a 16ª semana), após liberação obstétrica de rotina. Caso você já sinta dores na lombar ou na sínfise púbica antes desse período, a avaliação fisioterapêutica já pode ser realizada para alívio precoce.",
  },
  {
    question: "O que é o Tapping no pós-parto e como ele ajuda?",
    answer:
      "O Tapping consiste na aplicação de bandagens elásticas terapêuticas com técnica e tensão específicas na região abdominal e pélvica. Ele auxilia no suporte visceral, alívio de dor, diminuição do inchaço e estabilização da parede abdominal no pós-parto imediato, sem apertar nem restringir a circulação como cintas convencionais.",
  },
  {
    question: "Perder pequenas gotas de urina ao espirrar ou treinar é normal?",
    answer:
      "É comum, mas NÃO é normal. A perda involuntária de qualquer quantidade de urina é um sinal de que a musculatura do assoalho pélvico necessita de reabilitação funcional — seja por fraqueza, incoordenação ou excesso de tensão muscular. O tratamento tem altos índices de sucesso.",
  },
  {
    question: "Como funcionam os agendamentos em Herval d'Oeste e Luzerna?",
    answer:
      "Os atendimentos são realizados exclusivamente com horário marcado para garantir total privacidade e pontualidade. Basta enviar uma mensagem no WhatsApp oficial para verificarmos a disponibilidade nas duas unidades.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent("Olá, Dra. Ana Lívia! Tenho uma dúvida que não encontrei no site.");

  return (
    <section id="duvidas" className="py-24 sm:py-32 bg-[#F7F3EC] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6239] mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241A14] font-medium leading-tight">
            Perguntas & Respostas
          </h2>
          <p className="mt-3 text-base text-[#6D5D51]">
            Informações claras para que você se sinta 100% segura antes da sua primeira visita.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E5DACD] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl font-medium text-[#241A14] hover:text-[#8C6239] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#E2D5C4] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#241A14] text-white border-transparent" : "text-[#7E6E62]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#6D5D51] leading-relaxed border-t border-[#F0E6DA] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#7E6E62]">
            Ficou com alguma dúvida específica sobre o seu caso?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#241A14] hover:text-[#8C6239] underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-[#C68670]" />
            Conversar diretamente com a Dra. Ana Lívia no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
