import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract-tech/1920/1080?blur=10')] opacity-5 bg-cover bg-center" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2"></span>
                Nowość dla MŚP
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl/none">
                Odzyskaj nawet 80% zaległych faktur — bez windykatorów, bez telefonów, bez stresu
              </h1>
              <p className="max-w-[600px] text-lg text-slate-600 md:text-xl/relaxed">
                Twój zespół traci średnio 6 godzin tygodniowo na ściganie dłużników. WiWi robi to za nich — automatycznie, zgodnie z prawem i bez niszczenia relacji z klientami.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#kontakt" className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-8 h-14 text-base font-medium transition-colors">
                🔒 Zacznij odzyskiwać pieniądze — wypełnij formularz <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="#jak-to-dziala" className="inline-flex items-center justify-center rounded-full px-8 h-14 text-base font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors">
                Jak to działa?
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Szybka reakcja na zaległości (15-60 dni)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Płatności One-Click bez rozmowy z call center</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Brak opłat za wdrożenie w okresie testowym</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-none"
          >
            <div className="relative rounded-2xl border bg-white p-2 shadow-2xl">
              <div className="overflow-hidden rounded-xl border bg-slate-50">
                <div className="flex items-center border-b bg-white px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="mx-auto flex h-6 w-1/2 items-center justify-center rounded-md bg-slate-100 text-[10px] font-medium text-slate-500">
                    dashboard.wiwi.pl
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Skuteczność kampanii</h3>
                      <p className="text-sm text-slate-500">Ostatnie 30 dni</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">+15%</div>
                      <p className="text-xs text-slate-500">Wzrost odzysku</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: "Kampania SMS - Przypomnienie", status: "Aktywna", progress: 85, color: "bg-blue-500" },
                      { name: "Kampania Email - Wezwanie", status: "Aktywna", progress: 62, color: "bg-indigo-500" },
                      { name: "Voicebot AI - Negocjacje", status: "Wstrzymana", progress: 30, color: "bg-slate-300" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-slate-700">{item.name}</span>
                          <span className="text-slate-500">{item.progress}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                          <div className={`h-full ${item.color}`} style={{ width: `${item.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-lg bg-indigo-50 p-4 border border-indigo-100">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-indigo-100 p-2">
                        <ShieldCheck className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-indigo-900">AI Sugestia</h4>
                        <p className="text-xs text-indigo-700 mt-1">
                          Zmień godzinę wysyłki SMS dla segmentu B2B na 10:00. Przewidywany wzrost spłat o 12%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
