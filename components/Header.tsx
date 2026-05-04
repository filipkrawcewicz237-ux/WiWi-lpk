import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            WiWi
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#alternatywy" className="hover:text-indigo-500 transition-colors">Alternatywy</Link>
          <Link href="#funkcje" className="hover:text-indigo-500 transition-colors">Funkcje</Link>
          <Link href="#jak-to-dziala" className="hover:text-indigo-500 transition-colors">Jak to działa</Link>
          <Link href="#trendy" className="hover:text-indigo-500 transition-colors">Dlaczego warto</Link>
          <Link href="#cennik" className="hover:text-indigo-500 transition-colors">Cennik</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#kontakt" className="inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 h-10 text-sm font-medium transition-colors">
            Kup Usługę
          </Link>
        </div>
      </div>
    </header>
  );
}
