import { ArrowRight, Database, FileSpreadsheet, Settings, TrendingUp } from "lucide-react";

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
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
