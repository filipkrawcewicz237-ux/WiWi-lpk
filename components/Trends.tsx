import { CheckCircle2, TrendingUp, ShieldAlert, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Trends() {
  const trends = [
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
      title: "Płatność One-Click",
      description: "Klienci wolą załatwiać sprawy online. Link do płatności (SMS/mail) pozwala na spłatę jednym kliknięciem, bez logowania i rozmowy z call center.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
      title: "Rosnący rynek AI",
      description: "AI przewiduje szansę zapłaty, dobiera kanał i godzinę kontaktu. Wczesna adopcja daje przewagę na rynku.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-indigo-600" />,
      title: "Mniej sporów i fraudów",
      description: "Prosty, udokumentowany proces zmniejsza liczbę chargebacków i spraw w sądzie, zwiększając przejrzystość.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-indigo-600" />,
      title: "Szybkość wdrożenia",
      description: "Rynek jest rozproszony. Liczy się szybkość wdrożenia, pełny compliance i realny wzrost recovery (+5-15%).",
    },
  ];

  return (
    <section id="trendy" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Dlaczego warto wdrożyć WiWi już teraz?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Wzrost zadłużenia (kredyty, BNPL, stopy, inflacja) powoduje więcej zaległości. Małe i średnie firmy potrzebują automatyzacji przy dużej liczbie małych należności.
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
                &quot;AI w windykacji rośnie o 25-30% rocznie. To okno możliwości na najbliższe 2-4 lata dla firm MŚP.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
