import { CheckCircle2, TrendingUp, ShieldAlert, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Trends() {
  const trends = [
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
      title: "Wyższa skuteczność odzysku",
      description: "WiWi osiąga średnio 15-25% wyższą skuteczność odzysku niż konkurencyjne narzędzia, dzięki zaawansowanemu AI i optymalizacji kampanii.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      title: "Niższe koszty operacyjne",
      description: "Stały miesięczny abonament bez prowizji od odzyskanych kwot oznacza niższe koszty całkowite w porównaniu do rozwiązań opartych na prowizjach.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-indigo-600" />,
      title: "Szybsze wdrożenie",
      description: "Wdrożenie WiWi zajmuje minuty, a nie tygodnie czy miesiące jak w przypadku konkurencji. Zacznij odzyskiwać pieniądze natychmiast.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-indigo-600" />,
      title: "Lepsza ochrona relacji z klientami",
      description: "Miękka windykacja WiWi chroni relacje biznesowe, unikając agresywnych taktyk stosowanych przez tradycyjnych windykatorów i konkurencję.",
    },
  ];

  return (
    <section id="trendy" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Dlaczego WiWi jest lepsze od konkurencji?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              WiWi wyróżnia się na rynku automatyzacji windykacji dzięki innowacyjnym rozwiązaniom, które zapewniają wyższą skuteczność i niższe koszty niż tradycyjne narzędzia.
            </p>
            <div className="space-y-6">
              {trends.map((trend, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    {trend.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{trend.title}</h3>
                    <p className="mt-2 text-slate-600">{trend.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5]">
            <Image 
              src="https://picsum.photos/seed/business-growth/800/1000?blur=2" 
              alt="Business Growth" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8">
              <p className="text-white font-medium text-lg">
                &quot;WiWi oferuje 20% wyższą skuteczność odzysku przy 30% niższych kosztach niż średnia rynkowa. To przewaga, której konkurencja nie dogoni.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
