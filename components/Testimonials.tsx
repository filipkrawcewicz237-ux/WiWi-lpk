import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "„Mieliśmy ponad 40 faktur zaległych powyżej 60 dni. Po 3 tygodniach z WiWi — 31 zostało spłaconych. Nie dzwoniliśmy do nikogo, system zrobił wszystko sam.\"",
      author: "Marek T. — właściciel firmy usługowej, Wrocław",
      rating: 5,
      status: "Użytkownik od 2 miesięcy",
    },
    {
      quote: "„Wcześniej Excel + telefon zajmowały nam 2 dni robocze miesięcznie. Teraz poświęcamy na to 20 minut. Odzysk wzrósł o 23%.\"",
      author: "Anna K. — CEO małej agencji marketingowej, Kraków",
      rating: 5,
      status: "Tester beta",
    },
    {
      quote: "„Obawiałem się, że automatyczne wiadomości zepsują relacje z klientami. Efekt był odwrotny — klienci piszą, że cenią sobie przypomnienia przez SMS zamiast nieoczekiwanych telefonów.\"",
      author: "Piotr W. — właściciel hurtowni budowlanej, Poznań",
      rating: 5,
      status: "Tester beta",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Co mówią firmy, które już odzyskują długi z WiWi?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-6 italic">
                {testimonial.quote}
              </blockquote>
              <div className="text-sm text-slate-600">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-slate-500">{testimonial.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}