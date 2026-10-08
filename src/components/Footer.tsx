"use client";

import { MessageCircle, MapPin, Heart, Shield } from "lucide-react";

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

export function Footer() {
  const whatsappUrl =
    "https://wa.me/5554984253363?text=" +
    encodeURIComponent("Olá, Dra. Ana Lívia! Gostaria de falar sobre agendamento.");

  return (
    <footer className="bg-[#241A14] text-[#FAF6F0] pt-20 pb-12 border-t border-[#3B2C22]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#3B2C22]">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#FAF6F0]">
              Dra. Ana Lívia de Souza
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#D4C3B5] mt-1 font-medium">
              Fisioterapia Pélvica · Saúde da Mulher
            </p>
            <p className="mt-4 text-sm text-[#BDB0A3] leading-relaxed">
              Cuidado humanizado, escuta atenta e respeito ao corpo feminino em todas as suas fases de transformação.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-[#E8D3C8]">
              <span>&ldquo;Saúde da mulher em todas as fases da vida.&rdquo;</span>
              <span>💖</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4C3B5] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BDB0A3]">
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Dra. Ana Lívia
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Avaliações no Google (5.0★)
                </a>
              </li>
              <li>
                <a href="#locais" className="hover:text-white transition-colors">
                  Locais de Atendimento
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Areas of Care */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4C3B5] mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-[#BDB0A3]">
              <li>Preparo Corporal para o Parto</li>
              <li>Alívio de Dores Gestacionais</li>
              <li>Recuperação Pós-Parto & Tapping</li>
              <li>Reabilitação de Diástase Abdominal</li>
              <li>Tratamento de Incontinência Urinária</li>
              <li>Tratamento de Dores na Relação Íntima</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4C3B5] mb-4">
              Contato & Agendamento
            </h4>
            <div className="space-y-3 text-sm text-[#BDB0A3]">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>(54) 98425-3363 (WhatsApp)</span>
              </a>

              <a
                href="https://www.instagram.com/fisioanaliviaf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C68670] shrink-0" />
                <span>@fisioanaliviaf</span>
              </a>

              <div className="flex items-start gap-2.5 pt-2">
                <MapPin className="w-4 h-4 text-[#D4C3B5] shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-semibold text-white">Herval d&apos;Oeste – SC (Centro, CEP 89610-000)</p>
                  <p className="mt-0.5">Luzerna – SC (Atendimento com hora marcada)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#9E8E81] gap-4">
          <p>
            © 2026 Dra. Ana Lívia de Souza · Fisioterapia Pélvica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Atendimento em conformidade com o Código de Ética do COFFITO / CREFITO.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
