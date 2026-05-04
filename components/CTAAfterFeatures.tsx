import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTAAfterFeatures() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Twój zespół może przestać zajmować się windykacją — nawet od dziś.
        </h3>
        <Link href="#kontakt">
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-8 h-12 font-medium">
            Zacznij odzyskiwać pieniądze →
          </Button>
        </Link>
      </div>
    </section>
  );
}