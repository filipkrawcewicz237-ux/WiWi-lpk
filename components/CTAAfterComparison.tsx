import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAAfterComparison() {
  return (
    <section className="py-16 bg-indigo-500">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Przestań tracić czas i prowizje. Przejdź na model abonamentowy.
        </h3>
        <Link href="#kontakt">
          <Button className="bg-white text-indigo-500 hover:bg-slate-100 rounded-full px-8 h-12 font-medium">
            🔒 Aktywuj WiWi dla swojej firmy →
          </Button>
        </Link>
      </div>
    </section>
  );
}