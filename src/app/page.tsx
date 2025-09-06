'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, MessageCircle, Users, Zap, Crown, Sparkles, Smartphone, Clock, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const whatsappNumber = "5577998276042";
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no material dos 150 Salmos Explicados. Podem me enviar mais informações?");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const [pulse, setPulse] = useState(false );

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(!pulse);
    }, 2000);
    return () => clearInterval(interval);
  }, [pulse]);

  return (
    // ... (todo o início do seu código continua igual) ...
    
    // A partir do primeiro botão:
    
                // Botão principal
                <div className="w-full max-w-md mx-auto">
                  <Button 
                    id="botao-principal-whatsapp" // Adicionamos um ID principal aqui para referência
                    data-action="iniciar-whatsapp" // <<< ADICIONE ESTA LINHA
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 md:py-8 px-12 md:px-16 rounded-full text-2xl md:text-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 w-full relative overflow-hidden group"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 md:w-10 md:h-10 mr-4" />
                      QUERO RECEBER AGORA
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </div>

    // ... (código do meio) ...

            <Button 
              data-action="iniciar-whatsapp" // <<< ADICIONE ESTA LINHA
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg py-3 px-8 rounded-full"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              FALAR COM ESPECIALISTA
            </Button>

    // ... (código do meio) ...

      {/* Botão Flutuante (Fixo) para Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          data-action="iniciar-whatsapp" // <<< ADICIONE ESTA LINHA
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>

      {/* Botão Flutuante para Desktop */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <Button 
          data-action="iniciar-whatsapp" // <<< ADICIONE ESTA LINHA
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 shadow-2xl animate-pulse"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <MessageCircle className="w-10 h-10" />
        </Button>
      </div>

    // ... (resto do código) ...
  );
}
