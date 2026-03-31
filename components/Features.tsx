import { Bot, CheckCircle, CreditCard, LayoutDashboard, MessageSquare, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-indigo-500" />,
      title: "Szybki Input Danych",
      description: "Opcja Automat (integracja z systemem billingowym) lub Manual (import z Excela lub ręczne wprowadzanie).",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-indigo-500" />,
      title: "Sprawdzone Scenariusze",
      description: "Gotowe kampanie windykacyjne oparte na wieloletnim know-how branżowym. Skuteczne metody i strategie behawioralne.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-500" />,
      title: "Automatyczna Komunikacja",
      description: "Wysyłka przypomnień i szablony wiadomości przez SMS, e-mail, voice, AI chat oraz voicebot.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-indigo-500" />,
      title: "Płatności One-Click",
      description: "Prosty proces spłaty poprzez link do szybkiej płatności bez konieczności logowania i rozmowy z call center.",
    },
    {
      icon: <Bot className="h-10 w-10 text-indigo-500" />,
      title: "AI Learns as you work",
      description: "Sztuczna inteligencja modyfikuje scenariusze na bazie profilu Twoich klientów i efektów działań, przewidując szansę zapłaty.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-indigo-500" />,
      title: "Dashboard Windykacji",
      description: "Monitorowanie wskaźników realizacji kampanii, ściągalności długu, KPI sukcesu oraz predykcja terminów spłat.",
    },
  ];

  return (
    <section id="funkcje" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Wszystko, czego potrzebujesz do skutecznej windykacji
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            System przejmuje zadania dotychczas wykonywane ręcznie przez pracowników, automatyzując cały proces odzyskiwania należności.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
