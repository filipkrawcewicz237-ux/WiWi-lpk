import { XCircle, Clock, Coins, FileWarning, CheckCircle2 } from "lucide-react";

export default function Alternatives() {
  const alternatives = [
    {
      title: "Tradycyjne agencje windykacyjne",
      icon: <Coins className="h-8 w-8 text-rose-500" />,
      flaws: [
        "Pobierają wysokie prowizje (nawet 20-30% długu)",
        "Psują relacje z Twoimi klientami agresywnym podejściem",
        "Brak transparentności działań i ukryte koszty",
      ],
    },
    {
      title: "Ręczne przypomnienia (Excel + Telefon)",
      icon: <Clock className="h-8 w-8 text-rose-500" />,
      flaws: [
        "Pochłaniają mnóstwo Twojego cennego czasu",
        "Wysokie ryzyko błędu ludzkiego i przeoczeń",
        "Brak systematyczności i trudność w skalowaniu",
      ],
    },
    {
      title: "Drogie systemy ERP / Enterprise",
      icon: <FileWarning className="h-8 w-8 text-rose-500" />,
      flaws: [
        "Wymagają wielomiesięcznego wdrożenia i szkoleń",
        "Skupiają się na księgowości, a nie na psychologii spłaty",
        "Zbyt skomplikowane i drogie dla sektora MŚP",
      ],
    },
  ];

  return (
    <section id="alternatywy" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Dlaczego obecne rozwiązania zawodzą?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tradycyjne metody odzyskiwania należności są albo zbyt drogie, albo zbyt czasochłonne. Zobacz, z czym musisz się mierzyć bez odpowiedniego systemu.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {alternatives.map((alt, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-rose-500"></div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-rose-50">
                {alt.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{alt.title}</h3>
              <ul className="space-y-3">
                {alt.flaws.map((flaw, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-tight">{flaw}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            WiWi to zupełnie inne podejście
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Płacisz stały abonament, bez prowizji od odzyskanej kwoty</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Automatyzacja oszczędza 80% czasu Twojego zespołu</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Miękka windykacja chroni relacje z Twoimi klientami</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
              <CheckCircle2 className="h-6 w-6 text-emerald-400 flex-shrink-0" />
              <span className="font-medium">Wdrożenie i start zajmuje minuty, a nie miesiące</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
