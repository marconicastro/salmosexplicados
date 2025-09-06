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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Cabeçalho */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Crown className="w-5 h-5 text-yellow-400" />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Instituto Fundamentos Cristão
            </h1>
            <Crown className="w-5 h-5 text-yellow-400" />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-2xl">
        {/* Badge de Destaque */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
            <Sparkles className="w-4 h-4" />
            MATERIAL EXCLUSIVO
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* SELO MAIS IMPORTANTE - PAGUE DEPOIS */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-4 rounded-full text-lg font-bold shadow-lg animate-pulse">
            <Shield className="w-6 h-6" />
            <span>🎁 RECEBA PRIMEIRO - PAGUE DEPOIS</span>
            <Shield className="w-6 h-6" />
          </div>
          <p className="text-emerald-300 text-sm mt-2 font-medium">
            Você só paga após receber e conferir todo o material!
          </p>
        </div>

        {/* Headline e Sub-headline */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Descubra a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Sabedoria Divina
            </span>
            nos Salmos
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light leading-relaxed">
            Uma jornada transformadora através dos 150 Salmos explicados versículo por versículo
          </p>
        </div>

        {/* CARD PRINCIPAL COM DESTAQUE MÁXIMO PARA WHATSAPP */}
        <Card className="shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm mb-8 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            {/* Imagem do Produto */}
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src="/150-salmos-produto.png" 
                alt="150 Salmos Explicados - Material Exclusivo"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '400px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Material Digital Exclusivo</div>
                  <div className="text-lg opacity-90">Receba Agora - Pague Depois</div>
                </div>
              </div>
            </div>

            {/* BENEFÍCIOS */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">Explicações claras e profundas</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">100% Fiel à Palavra Sagrada</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">Estudo prático e aplicável</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">Conexão profunda com Deus</span>
              </div>
            </div>

            {/* DESTAQUE MÁXIMO - RECEBA VIA WHATSAPP */}
            <div className="relative mb-8">
              {/* Background animado */}
              <div className={`absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl ${pulse ? 'animate-pulse' : ''}`}></div>
              <div className="relative bg-gradient-to-r from-green-600/30 to-emerald-700/30 border-2 border-green-400/50 rounded-2xl p-8 text-center">
                {/* Ícones flutuantes */}
                <div className="flex justify-center space-x-4 mb-4">
                  <div className="bg-green-500 rounded-full p-3 animate-bounce">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-emerald-500 rounded-full p-3 animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-green-600 rounded-full p-3 animate-bounce" style={{ animationDelay: '0.4s' }}>
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Texto principal com destaque máximo */}
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                    📌 RECEBA SEU MATERIAL
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
                    IMEDIATAMENTE
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                    VIA WHATSAPP
                  </div>
                  
                  {/* DESTAQUE DO PAGAMENTO DEPOIS */}
                  <div className="bg-yellow-400/20 border-2 border-yellow-400/50 rounded-xl p-4 mb-4">
                    <div className="text-yellow-300 text-xl font-bold mb-2">
                      💛 SEM RISCO ZERO
                    </div>
                    <div className="text-white text-lg font-semibold">
                      PAGUE SOMENTE DEPOIS QUE RECEBER!
                    </div>
                    <div className="text-yellow-200 text-sm mt-2">
                      Receba primeiro, confira tudo, e só então pague
                    </div>
                  </div>
                </div>

                {/* Sub-texto explicativo */}
                <div className="text-green-200 text-lg mb-6">
                  <p>🚀 Enviamos diretamente no seu WhatsApp</p>
                  <p>⏰ Em poucos minutos você já está estudando</p>
                  <p>📱 Acesso em qualquer dispositivo</p>
                  <p>💰 Pague somente após ficar satisfeito</p>
                </div>

                {/* Botão principal */}
                <div className="w-full max-w-md mx-auto">
                  <Button 
                    data-action="iniciar-whatsapp"
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

                {/* Texto de incentivo */}
                <p className="text-green-300 text-sm mt-4 animate-pulse">
                  👆 Clique agora e receba em menos de 2 minutos! Pague depois de conferir!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Elementos de Confiança */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/5 border border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-white text-lg font-semibold mb-2">
                Comunidade Ativa
              </div>
              <div className="text-blue-200">
                Milhares de cristãos transformando sua vida com nossos materiais
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-white text-lg font-semibold mb-2">
                Pague Depois de Receber
              </div>
              <div className="text-blue-200">
                Zero risco! Você só paga após receber e conferir todo o material
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção Final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Transforme Sua Vida Espiritual Hoje
            </h2>
            <p className="text-lg text-blue-200 mb-6">
              Não perca esta oportunidade única de aprofundar seu conhecimento e fortalecer sua fé
            </p>
            <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl p-4 mb-6">
              <div className="text-emerald-300 text-xl font-bold mb-2">
                🎁 OFERTA ESPECIAL: PAGUE DEPOIS!
              </div>
              <div className="text-white text-lg">
                Receba o material completo agora e só pague se ficar satisfeito
              </div>
            </div>
            <Button 
              data-action="iniciar-whatsapp"
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg py-3 px-8 rounded-full"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              FALAR COM ESPECIALISTA
            </Button>
          </div>
        </div>
      </main>

      {/* Botão Flutuante (Fixo) para Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button 
          data-action="iniciar-whatsapp"
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
          data-action="iniciar-whatsapp"
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 shadow-2xl animate-pulse"
          onClick={() => window.open(whatsappLink, '_blank')}
        >
          <MessageCircle className="w-10 h-10" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-4 h-4 text-yellow-400" />
            <p className="text-white text-sm">
              Instituto Fundamentos Cristão
            </p>
            <Crown className="w-4 h-4 text-yellow-400" />
          </div>
          <p className="text-gray-400 text-xs">
            © 2025 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
// Forçando a atualização
