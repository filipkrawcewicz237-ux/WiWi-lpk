import { ArrowRight, CheckCircle2, Database, FileSpreadsheet, Settings, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Wprowadź dane dłużników",
      description: "Zintegruj system billingowy (Automat) lub wgraj plik Excel (Manual).",
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Wybierz scenariusz",
      description: "Skorzystaj z gotowych kampanii lub stwórz własne zasady.",
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-indigo-600" />,
      title: "Automat działa",
      description: "System wysyła przypomnienia (SMS, e-mail) z linkiem do szybkiej płatności.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: "Monitoruj efekty",
      description: "Analizuj ściągalność w dashboardzie, a AI zoptymalizuje kolejne działania.",
    },
  ];

  return (
    <section id="jak-to-dziala" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Jak działa WiWi?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Proces odzyskiwania należności jeszcze nigdy nie był tak prosty.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl">
                {step.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold"><span className="text-indigo-400 mr-2">{index + 1}.</span>{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-900 rounded-3xl p-12 md:p-16 text-center text-white max-w-6xl mx-auto shadow-xl mt-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            WiWi to zupełnie inne podejście
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Płacisz stały miesięczny abonament, bez ukrytych prowizji od każdej odzyskanej złotówki - wiesz dokładnie, ile płacisz za usługę.</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Automatyzacja procesów oszczędza aż 80% czasu Twojego zespołu, pozwalając skupić się na rozwoju biznesu zamiast na ręcznym ściganiu dłużników.</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Miękka windykacja oparta na automatycznych przypomnieniach chroni relacje z klientami, unikając konfrontacji i stresu związanego z tradycyjną windykacją.</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Wdrożenie systemu zajmuje zaledwie minuty, a nie miesiące - połącz się z systemem billingowym i rozpocznij odzyskiwanie należności już dziś.</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl sm:col-span-2 lg:col-span-1">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Odzyskaj nawet 80% zaległych faktur dzięki inteligentnym kampaniom SMS, email i AI, które maksymalizują skuteczność bez angażowania ludzi.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
