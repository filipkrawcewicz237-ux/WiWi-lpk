"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Czy WiWi nie zepsuje moich relacji z klientami?",
      answer: "WiWi stosuje tzw. miękką windykację — uprzejme przypomnienia przez SMS i e-mail, w Twoim imieniu i z Twoim logo. Klienci reagują na nie tak samo jak na wiadomość od Ciebie — bez agresji i bez stresu.",
    },
    {
      question: "Jak długo trwa wdrożenie?",
      answer: "Od rejestracji do pierwszej wysyłki przypomnienia — zazwyczaj mniej niż godzina. Możesz zacząć od importu Excela, bez żadnej integracji technicznej.",
    },
    {
      question: "Co jeśli mój klient zaprzeczy, że dostał wezwanie?",
      answer: "Każda wiadomość jest rejestrowana w systemie z datą, godziną i potwierdzeniem dostarczenia. Masz pełną dokumentację na wypadek sporu lub postępowania sądowego.",
    },
    {
      question: "Czy to zgodne z prawem — automatyczne wezwania do zapłaty?",
      answer: "Tak. WiWi działa zgodnie z polskim prawem i RODO. Wysyłamy wyłącznie wiadomości w Twoim imieniu do Twoich kontrahentów, z którymi już masz umowę handlową.",
    },
    {
      question: "Ile firm już korzysta z WiWi?",
      answer: "WiWi jest aktualnie w fazie testów z wyselekcjonowaną grupą firm MŚP. Dołącz teraz i skorzystaj z warunków dla pierwszych użytkowników.",
    },
    {
      question: "Ile kosztuje, jeśli nic nie odzyskam?",
      answer: "Płacisz stały abonament — niezależnie od wyników. Nie ma prowizji od odzyskanej kwoty, więc nawet w gorszym miesiącu nie płacisz ekstra. Ryzyko jest po naszej stronie.",
    },
    {
      question: "Czy mogę zrezygnować w każdej chwili?",
      answer: "Tak. Brak umów długoterminowych, brak kar za rezygnację. Możesz zakończyć subskrypcję w dowolnym momencie z poziomu konta.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Masz pytania? Mamy odpowiedzi.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}