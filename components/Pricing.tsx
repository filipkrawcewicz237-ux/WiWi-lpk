import { CheckCircle2, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      title: "Model za Dłużnika",
      description: "Opłata zależna od liczby aktywnych dłużników w systemie.",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      features: [
        "Koszty integracji (jednorazowo)",
        "Miesięczny abonament SaaS",
        "Nielimitowana liczba komunikatów",
        "Dostęp do wszystkich scenariuszy",
        "Wsparcie AI",
      ],
    },
    {
      title: "Model za Komunikat",
      description: "Opłata zależna od liczby wysłanych wiadomości (SMS/Email/Voice).",
      icon: <CreditCard className="h-6 w-6 text-indigo-600" />,
      features: [
        "Koszty integracji (jednorazowo)",
        "Miesięczny abonament SaaS",
        "Nielimitowana liczba dłużników",
        "Dostęp do wszystkich scenariuszy",
        "Wsparcie AI",
      ],
    },
  ];

  return (
    <section id="cennik" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Elastyczne modele rozliczeń
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Wybierz model, który najlepiej pasuje do skali Twojego biznesu.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                {plan.icon}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">{plan.title}</h3>
              <p className="text-slate-600 mb-8">{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="#kontakt" className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full h-12 font-medium transition-colors">
                Porozmawiajmy o ofercie
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
