"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phone = "5554984253363";
  const defaultMessage =
    "Olá, Dra. Ana Lívia! Gostaria de agendar uma consulta de fisioterapia pélvica.";
  const encodedMsg = encodeURIComponent(defaultMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <aside aria-label="Atendimento WhatsApp Dra. Ana Lívia" className="fixed bottom-6 right-6 z-50 flex items-center">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center h-14 w-14 sm:w-auto sm:px-5 sm:h-13 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#86EFAC] border-2 border-white" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2] shrink-0" />
        
        <span className="hidden sm:inline font-semibold text-sm tracking-wide text-white">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
