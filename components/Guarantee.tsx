import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-medium mb-4">
              <ShieldCheck className="h-5 w-5" />
              Gwarancja bezpieczeństwa
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-700">Zawsze masz dostęp do swoich danych</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-700">Twoje dane są szyfrowane i chronione zgodnie z RODO</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-700">Możesz zrezygnować w każdej chwili — bez kar i ukrytych opłat</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-slate-700">Wsparcie konsultanta przez cały okres wdrożenia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}