import { useState } from "react";
import {
  ArrowRight,
  Bone,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  House,
  Instagram,
  Menu,
  MessageCircle,
  MoveUpRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  X,
} from "lucide-react";

const whatsappUrl = "https://wa.me/5598989301997?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20fisioterapia%20a%20domic%C3%ADlio.";

const services = [
  { icon: HeartPulse, title: "Fisioterapia para idosos", text: "Mais mobilidade, equilíbrio e autonomia para viver bem em todas as fases." },
  { icon: Bone, title: "Ortopédica", text: "Recupere-se de dores, lesões, cirurgias e fraturas com segurança e cuidado." },
  { icon: Brain, title: "Neurológica", text: "Planos personalizados para AVC, Parkinson e outras condições neurológicas." },
  { icon: House, title: "Home care", text: "Cuidado especializado no conforto da sua casa, em São Luís e região." },
];

const benefits = [
  { icon: House, title: "No conforto da sua casa", text: "Sem deslocamentos ou salas de espera. O cuidado chega até você." },
  { icon: Stethoscope, title: "Cuidado personalizado", text: "Cada atendimento é pensado para sua rotina, seus objetivos e seu momento." },
  { icon: ShieldCheck, title: "Profissional de confiança", text: "Atendimento humanizado com responsabilidade, escuta e atualização constante." },
];

const testimonials = [
  { quote: "Depois das sessões, minha mãe voltou a caminhar com mais confiança. O carinho e a paciência fizeram toda diferença.", name: "Maria de Lourdes", role: "Filha de paciente · Calhau" },
  { quote: "Um atendimento que realmente olha para a pessoa. Me sinto mais seguro e independente a cada semana.", name: "José Carlos", role: "Paciente · Renascença" },
  { quote: "A praticidade de ser em casa e o cuidado próximo tornaram minha recuperação muito mais leve.", name: "Ana Beatriz", role: "Paciente · Cohama" },
];

const faqs = [
  { question: "Como funciona a fisioterapia a domicílio?", answer: "A primeira consulta acontece na sua casa, com uma avaliação completa e a definição de um plano de cuidado personalizado. As sessões seguintes acompanham sua evolução de forma prática e segura." },
  { question: "Quais bairros são atendidos?", answer: "Atendemos em toda São Luís, incluindo Calhau, Renascença, Cohama, Olho d’Água, Ponta d’Areia e bairros próximos." },
  { question: "Preciso de encaminhamento médico?", answer: "Não é obrigatório para a avaliação fisioterapêutica. Caso você já tenha um encaminhamento ou exames, eles serão muito bem-vindos." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8faf8] text-[#19312b]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label="Casa Movimento início">
            <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#1d6154] text-white shadow-lg shadow-[#1d6154]/20"><Sparkles size={19} /></span>
            <span className="font-display text-[21px] font-semibold tracking-[-0.04em]">Casa<span className="text-[#71a990]">Movimento</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#31564c] md:flex">
            <a className="text-[#1d6154]" href="#inicio">Início</a>
            <a href="#servicos" className="transition hover:text-[#1d6154]">Serviços</a>
            <a href="#como-funciona" className="transition hover:text-[#1d6154]">Como funciona</a>
            <a href="#depoimentos" className="transition hover:text-[#1d6154]">Depoimentos</a>
            <a href="#faq" className="transition hover:text-[#1d6154]">Dúvidas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#1d6154] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1d6154]/15 transition hover:-translate-y-0.5 hover:bg-[#174d43] sm:block">Agendar avaliação</a>
          <button className="rounded-full border border-[#d6e4dc] bg-white/70 p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <nav className="mx-4 rounded-2xl border border-[#dce9e1] bg-white p-4 shadow-xl md:hidden"><div className="flex flex-col gap-1 text-sm font-semibold"><a className="rounded-xl px-4 py-3 hover:bg-[#eef6f0]" href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a className="rounded-xl px-4 py-3 hover:bg-[#eef6f0]" href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a className="rounded-xl px-4 py-3 hover:bg-[#eef6f0]" href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a className="rounded-xl px-4 py-3 hover:bg-[#eef6f0]" href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a></div></nav>}
      </header>

      <main>
        <section id="inicio" className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#dceee3] blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.94fr] lg:gap-20">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cde2d4] bg-[#edf7ef] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#34745d]"><span className="h-2 w-2 rounded-full bg-[#76b68d]" /> Cuidado que se move com você</div>
              <h1 className="max-w-[650px] font-display text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-[#183b32]">Seu corpo merece <span className="text-[#72a88c]">cuidado</span> no lugar onde você se sente bem.</h1>
              <p className="mt-7 max-w-[530px] text-lg leading-8 text-[#58736a]">Fisioterapia a domicílio em São Luís, com escuta, técnica e um plano feito para devolver movimento à sua rotina.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d6154] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#1d6154]/20 transition hover:-translate-y-1 hover:bg-[#174d43]">Agendar avaliação <ArrowRight size={17} /></a><a href="tel:+5598989301997" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cdded5] bg-white/70 px-6 py-4 text-sm font-bold text-[#28584c] transition hover:border-[#1d6154] hover:bg-white"><Phone size={16} /> Falar com a gente</a></div>
              <div className="mt-10 flex items-center gap-5"><div className="flex -space-x-2"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#e7b49c] text-xs font-bold text-white">ML</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#8eb7a0] text-xs font-bold text-white">JC</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#b9a084] text-xs font-bold text-white">AB</span></div><div><div className="flex items-center gap-1 text-[#d89c38]"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><span className="ml-1 text-xs font-bold text-[#31564c]">5.0</span></div><p className="mt-0.5 text-xs text-[#70877e]">Cuidado que já transformou rotinas</p></div></div>
            </div>
            <div className="relative mx-auto w-full max-w-[570px] lg:mr-0"><div className="absolute -left-7 top-12 z-10 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-sm font-bold text-[#31564c]"><Check size={17} className="rounded-full bg-[#dff1e4] p-0.5 text-[#4e9674]" /> Atendimento humanizado</div></div><div className="relative aspect-[0.88] overflow-hidden rounded-[42px] rounded-bl-[110px] bg-[#d2e5d8] shadow-2xl shadow-[#28584c]/15"><img src="https://images.pexels.com/photos/8949833/pexels-photo-8949833.jpeg" alt="Fisioterapeuta atendendo paciente em casa" className="h-full w-full object-cover object-center" /></div><div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:right-7"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf7ef] text-[#478d6b]"><Clock3 size={22} /></span><div><p className="text-xs text-[#769087]">Atendimentos</p><p className="text-sm font-bold text-[#28584c]">Seg a Sáb · 7h às 19h</p></div></div></div>
          </div>
        </section>

        <section id="servicos" className="bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6ba184]">Como podemos ajudar</p><h2 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#183b32] md:text-5xl">Cuidado especializado, <span className="text-[#72a88c]">perto de você.</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#6a8178]">Atendimento completo para você recuperar sua independência e fazer as coisas que ama.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className={`group rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "bg-[#eaf5ed]" : "border border-[#e3eee7] bg-[#fbfdfb]"}`}><div className="mb-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#4c9874] shadow-sm"><Icon size={23} strokeWidth={1.8} /></div><h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[#23483d]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6b8479]">{text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#478d6b]">Saiba mais <MoveUpRight size={14} /></a></article>)}</div></div></section>

        <section id="como-funciona" className="bg-[#f0f7f1] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6ba184]">Uma jornada mais leve</p><h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#183b32] md:text-5xl">Fisioterapia que entende o seu <span className="text-[#72a88c]">ritmo.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-[#647c72]">Nosso jeito de cuidar combina conhecimento e acolhimento para que cada pequeno avanço seja celebrado.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#286653]">Conheça nosso jeito de cuidar <ArrowRight size={16} /></a></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(({ icon: Icon, title, text }, index) => <div key={title} className={`rounded-3xl bg-white p-6 ${index === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""}`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f2e8] text-[#4c9874]"><Icon size={21} /></div><h3 className="font-display text-lg font-semibold tracking-[-0.025em]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#72887f]">{text}</p></div>)}</div></div></section>

        <section id="depoimentos" className="bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6ba184]">Histórias reais</p><h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#183b32] md:text-5xl">O movimento de cada dia.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="rounded-3xl bg-[#f7faf7] p-7"><div className="flex gap-1 text-[#e3a745]">{[1,2,3,4,5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><blockquote className="mt-6 font-display text-[19px] leading-7 tracking-[-0.02em] text-[#31564c]">“{item.quote}”</blockquote><figcaption className="mt-7 border-t border-[#e3e9e3] pt-5"><p className="text-sm font-bold text-[#31564c]">{item.name}</p><p className="mt-1 text-xs text-[#84958e]">{item.role}</p></figcaption></figure>)}</div></div></section>

        <section id="faq" className="bg-[#f8faf8] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.7fr_1fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6ba184]">Ainda com dúvidas?</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#183b32]">Tudo bem. A gente explica.</h2></div><div>{faqs.map((faq, index) => <div key={faq.question} className="border-b border-[#dce8df] py-5 first:pt-0"><button className="flex w-full items-center justify-between gap-4 text-left font-display text-lg font-semibold tracking-[-0.025em] text-[#31564c]" onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<ChevronDown size={19} className={`shrink-0 text-[#6ba184] transition ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="mt-3 max-w-lg text-sm leading-6 text-[#71867d]">{faq.answer}</p>}</div>)}</div></div></section>

        <section className="px-5 py-16 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#1d6154] px-7 py-12 text-white md:px-14 md:py-16"><div className="absolute -right-20 -top-36 h-80 w-80 rounded-full border-[45px] border-[#68a886]/20" /><div className="relative max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#a8d6b9]">Seu próximo passo começa aqui</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">Mais movimento para a vida que você quer viver.</h2><p className="mt-5 text-base leading-7 text-[#c5e1ce]">Agende uma conversa e descubra como a Casa Movimento pode fazer parte da sua jornada.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#1d6154] transition hover:-translate-y-1 hover:bg-[#eef8f0]">Agendar pelo WhatsApp <MessageCircle size={17} /></a></div></div></section>
      </main>

      <footer className="border-t border-[#e3ece5] bg-white px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><a href="#inicio" className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1d6154] text-white"><Sparkles size={17} /></span><span className="font-display text-lg font-semibold tracking-[-0.04em]">Casa<span className="text-[#71a990]">Movimento</span></span></a><p className="mt-4 max-w-xs text-sm leading-6 text-[#84958e]">Fisioterapia a domicílio com presença, técnica e acolhimento em São Luís.</p></div><div className="flex flex-col gap-3 text-sm text-[#60786d] md:items-end"><div className="flex gap-5"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-[#1d6154]">WhatsApp</a><a href="tel:+5598989301997" className="transition hover:text-[#1d6154]">(98) 98930-1997</a><a href="#inicio" className="transition hover:text-[#1d6154]"><Instagram size={17} /></a></div><p className="text-xs text-[#9aacA4]">© 2024 Casa Movimento. Cuidado que se move com você.</p></div></div></footer>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#37b66c] text-white shadow-xl shadow-[#37b66c]/30 transition hover:scale-105" aria-label="Falar pelo WhatsApp"><MessageCircle size={25} /></a>
    </div>
  );
}
