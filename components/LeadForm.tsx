"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko jest wymagane"),
  company: z.string().min(2, "Nazwa firmy jest wymagana"),
  email: z.string().email("Niepoprawny adres email"),
  phone: z.string().min(9, "Niepoprawny numer telefonu"),
  debtorsCount: z.string().min(1, "Wybierz szacowaną liczbę dłużników"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="kontakt" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 bg-amber-50 rounded-2xl border border-amber-100 p-8 max-w-2xl mx-auto">
            <div className="text-6xl">⚠️</div>
            <h3 className="text-2xl font-bold text-slate-900">Ups! Coś poszło nie tak po naszej stronie.</h3>
            <p className="text-slate-600 max-w-md">
              Twoje zgłoszenie mogło nie dotrzeć. Aby mieć pewność — zadzwoń do nas teraz: +48 XXX XXX XXX lub napisz: kontakt@wiwi.pl
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Aktywuj WiWi dla swojej firmy</h3>
                <p className="text-slate-400 mb-8">
                  Uzupełnij dane poniżej, aby aktywować dostęp. Nasz konsultant skontaktuje się z Tobą w ciągu 24 godzin i ustali warunki startu.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm text-slate-300">Darmowa wycena</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm text-slate-300">Prezentacja demo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span className="text-sm text-slate-300">Analiza potrzeb</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-3 p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię i nazwisko</Label>
                  <Input id="name" placeholder="Jan Kowalski" {...register("name")} className={errors.name ? "border-red-500" : ""} />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Nazwa firmy</Label>
                  <Input id="company" placeholder="Moja Firma Sp. z o.o." {...register("company")} className={errors.company ? "border-red-500" : ""} />
                  {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email służbowy</Label>
                    <Input id="email" type="email" placeholder="jan@firma.pl" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+48 123 456 789" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="debtorsCount">Szacowana liczba dłużników miesięcznie</Label>
                  <Select onValueChange={(value: string | null) => value && setValue("debtorsCount", value)}>
                    <SelectTrigger className={errors.debtorsCount ? "border-red-500" : ""}>
                      <SelectValue placeholder="Wybierz przedział" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1 - 50</SelectItem>
                      <SelectItem value="51-200">51 - 200</SelectItem>
                      <SelectItem value="201-500">201 - 500</SelectItem>
                      <SelectItem value="500+">Powyżej 500</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.debtorsCount && <p className="text-sm text-red-500">{errors.debtorsCount.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Dodatkowe informacje (opcjonalnie)</Label>
                  <Textarea id="message" placeholder="Z jakim systemem billingowym pracujesz?" {...register("message")} />
                </div>

                <Button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white h-12 rounded-xl" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wysyłanie...
                    </>
                  ) : (
                    "✅ Aktywuj dostęp do WiWi"
                  )}
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Wysyłając formularz, wyrażasz zgodę na kontakt w celu przedstawienia oferty.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
