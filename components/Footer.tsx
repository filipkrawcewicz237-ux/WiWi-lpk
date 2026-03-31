import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-indigo-500" />
              <span className="text-xl font-bold tracking-tight text-white">
                WiWi
              </span>
            </Link>
            <p className="text-sm max-w-xs mb-6">
              Narzędzie automatyzujące proces windykacji dla MŚP, oparte na sprawdzonym know-how i wsparciu sztucznej inteligencji.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#alternatywy" className="hover:text-indigo-500 transition-colors">Alternatywy</Link></li>
              <li><Link href="#funkcje" className="hover:text-indigo-500 transition-colors">Funkcje</Link></li>
              <li><Link href="#jak-to-dziala" className="hover:text-indigo-500 transition-colors">Jak to działa</Link></li>
              <li><Link href="#trendy" className="hover:text-indigo-500 transition-colors">Dlaczego warto</Link></li>
              <li><Link href="#cennik" className="hover:text-indigo-500 transition-colors">Cennik</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">O nas</Link></li>
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">Kariera</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Prawne</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">Regulamin</Link></li>
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">Polityka Prywatności</Link></li>
              <li><Link href="#" className="hover:text-indigo-500 transition-colors">RODO</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} WiWi. Wszelkie prawa zastrzeżone.</p>
          <p className="text-slate-500">Projekt wspierany przez najnowsze technologie AI.</p>
        </div>
      </div>
    </footer>
  );
}
