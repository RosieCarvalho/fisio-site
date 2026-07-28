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

const whatsappUrl = "https://wa.me/5599981557721?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20fisioterapia%20respirat%C3%B3ria%20infantil.";

const services = [
  { icon: HeartPulse, title: "Respiratória infantil", text: "Cuidado especializado para bronquiolite, asma, pneumonia, atelectasia e outras condições." },
  { icon: Sparkles, title: "Laserterapia", text: "Tecnologia aplicada com acolhimento para apoiar a recuperação respiratória dos pequenos." },
  { icon: Brain, title: "Terapia ILIB", text: "Recurso complementar com laser de baixa intensidade, sempre com indicação individualizada." },
  { icon: House, title: "Cuidado humanizado", text: "Atendimento adaptado às necessidades de cada criança e de sua família." },
];

const benefits = [
  { icon: House, title: "No conforto da sua casa", text: "Sem deslocamentos ou salas de espera. A criança é cuidada em um ambiente acolhedor." },
  { icon: Stethoscope, title: "Mais de 10 anos de experiência", text: "Uma trajetória dedicada à fisioterapia e ao cuidado respiratório de crianças." },
  { icon: ShieldCheck, title: "Técnica e acolhimento", text: "Laserterapia e ILIB aplicados com responsabilidade, segurança e acompanhamento próximo." },
];

const testimonials = [
  { quote: "Minha filha passou a dormir melhor e respirar com mais tranquilidade. A Monica nos acolheu desde o primeiro atendimento.", name: "Camila Ferreira", role: "Mãe da paciente · São Luís" },
  { quote: "O atendimento em casa deixou tudo mais leve. Meu filho participa das sessões como se fosse uma brincadeira.", name: "Rafael Costa", role: "Pai do paciente · Renascença" },
  { quote: "A combinação de cuidado, técnica e laserterapia fez muita diferença na recuperação respiratória da minha filha.", name: "Juliana Mendes", role: "Mãe da paciente · Calhau" },
];

const faqs = [
  { question: "Como funciona a fisioterapia respiratória infantil?", answer: "A avaliação acontece com calma e de forma lúdica, respeitando a idade e o momento da criança. A partir dela, Monica define um plano de cuidado individualizado para a necessidade da família." },
  { question: "O que são laserterapia e ILIB?", answer: "São recursos de laser de baixa intensidade usados como apoio terapêutico. A indicação e a aplicação são feitas de forma personalizada, segura e adequada para cada criança." },
  { question: "Quais regiões são atendidas?", answer: "Monica atende famílias em São Luís e região, com possibilidade de atendimento domiciliar conforme a disponibilidade e o endereço." },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fff8fb] text-[#3c2530]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label="Fisio Monica Daniele início">
            <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#c94676] text-white shadow-lg shadow-[#c94676]/20"><Sparkles size={19} /></span>
            <span className="font-display text-[21px] font-semibold tracking-[-0.04em]">Fisio <span className="text-[#d66a91]">Monica Daniele</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#583343] md:flex">
            <a className="text-[#c94676]" href="#inicio">Início</a>
            <a href="#servicos" className="transition hover:text-[#c94676]">Serviços</a>
            <a href="#como-funciona" className="transition hover:text-[#c94676]">Como funciona</a>
            <a href="#depoimentos" className="transition hover:text-[#c94676]">Depoimentos</a>
            <a href="#faq" className="transition hover:text-[#c94676]">Dúvidas</a>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#c94676] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c94676]/15 transition hover:-translate-y-0.5 hover:bg-[#a93460] sm:block">Agendar avaliação</a>
          <button className="rounded-full border border-[#f0cfda] bg-white/70 p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
        {menuOpen && <nav className="mx-4 rounded-2xl border border-[#f2dce4] bg-white p-4 shadow-xl md:hidden"><div className="flex flex-col gap-1 text-sm font-semibold"><a className="rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a className="rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a className="rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><a className="rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a></div></nav>}
      </header>

      <main>
        <section id="inicio" className="relative px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#f9dce8] blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.94fr] lg:gap-20">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f2b9ca] bg-[#fff0f5] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#b83c68]"><span className="h-2 w-2 rounded-full bg-[#e987a6]" /> Respirar bem é viver melhor</div>
              <h1 className="max-w-[650px] font-display text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-[#4a2938]">Respirar bem é viver melhor, com <span className="text-[#d66a91]">cuidado</span> e acolhimento.</h1>
              <p className="mt-7 max-w-[530px] text-lg leading-8 text-[#715563]">Fisioterapia respiratória infantil em São Luís, com uma abordagem delicada, especializada e pensada para cada fase da infância.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c94676] px-6 py-4 text-sm font-bold text-white shadow-xl shadow-[#c94676]/20 transition hover:-translate-y-1 hover:bg-[#a93460]">Agendar avaliação <ArrowRight size={17} /></a><a href="tel:+5599981557721" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ebc4d1] bg-white/70 px-6 py-4 text-sm font-bold text-[#8c3155] transition hover:border-[#c94676] hover:bg-white"><Phone size={16} /> Falar com a gente</a></div>
              <div className="mt-10 flex items-center gap-5"><div className="flex -space-x-2"><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#e7b49c] text-xs font-bold text-white">ML</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#8eb7a0] text-xs font-bold text-white">JC</span><span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f8faf8] bg-[#b9a084] text-xs font-bold text-white">AB</span></div><div><div className="flex items-center gap-1 text-[#d89c38]"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><span className="ml-1 text-xs font-bold text-[#583343]">5.0</span></div><p className="mt-0.5 text-xs text-[#9f7786]">Mais de 10 anos cuidando de crianças</p></div></div>
            </div>
            <div className="relative mx-auto w-full max-w-[570px] lg:mr-0"><div className="absolute -left-7 top-12 z-20 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-sm font-bold text-[#583343]"><Check size={17} className="rounded-full bg-[#fde1ea] p-0.5 text-[#d34f7e]" /> Especialista em crianças</div></div><div className="relative aspect-[0.88] overflow-hidden rounded-[42px] rounded-bl-[110px] bg-[#f9dce8] shadow-2xl shadow-[#8c3155]/15"><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-[#e8a6bc]/60" /><div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#f6c6d6]/70" /><div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-[#f7d7bb]/50 blur-sm" /><div className="absolute bottom-10 right-8 z-10 hidden rounded-2xl bg-[#c94676] px-4 py-3 text-white shadow-xl sm:block"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f7c0d2]">Especialidades</p><p className="mt-1 text-sm font-semibold">Respiratória · Laser · ILIB</p></div><div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[180px] rounded-b-[42px] border-[10px] border-white/70 bg-[#fff0f5] shadow-xl"><img src="https://cdn.builder.io/api/v1/image/assets%2F18cb5fade1654d47acd87861151c417b%2F7c30ec150f2c45b98666770ee5d0bef0?format=webp&width=800&height=1200" alt="Monica Daniele, fisioterapeuta respiratória infantil" className="h-full w-full object-cover object-center" /></div><div className="absolute bottom-8 left-8 z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#c94676] shadow-lg"><HeartPulse size={22} /></div></div><div className="absolute -bottom-5 -right-4 flex items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl sm:right-7"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff0f5] text-[#c94676]"><Clock3 size={22} /></span><div><p className="text-xs text-[#9c6d7f]">Atendimentos</p><p className="text-sm font-bold text-[#8c3155]">Seg a Sáb · 7h às 19h</p></div></div></div>
          </div>
        </section>

        <section id="servicos" className="bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#c94676]">Como podemos ajudar</p><h2 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#4a2938] md:text-5xl">Fisioterapia respiratória infantil, <span className="text-[#d66a91]">feita para cada criança.</span></h2></div><p className="max-w-sm text-sm leading-6 text-[#80616f]">Atendimento baseado em evidências, humanizado e adaptado às necessidades de cada paciente.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, title, text }, index) => <article key={title} className={`group rounded-3xl p-7 transition hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "bg-[#fff0f5]" : "border border-[#f2dfe6] bg-[#fffafb]"}`}><div className="mb-14 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#d45b84] shadow-sm"><Icon size={23} strokeWidth={1.8} /></div><h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-[#563343]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#896d7a]">{text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#c94676]">Saiba mais <MoveUpRight size={14} /></a></article>)}</div></div></section>

        <section id="como-funciona" className="bg-[#fff1f6] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1fr] lg:items-center"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#c94676]">O jeito Monica Daniele de cuidar</p><h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#4a2938] md:text-5xl">Cuidado especializado para respirar, brincar e <span className="text-[#d66a91]">crescer melhor.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-[#7d5c6d]">Monica une experiência, evidências científicas e uma abordagem acolhedora para promover mais conforto e qualidade de vida infantil.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b83c68]">Conheça o atendimento <ArrowRight size={16} /></a></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(({ icon: Icon, title, text }, index) => <div key={title} className={`rounded-3xl bg-white p-6 ${index === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-8px)]" : ""}`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fde4ed] text-[#d45b84]"><Icon size={21} /></div><h3 className="font-display text-lg font-semibold tracking-[-0.025em]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#896d7a]">{text}</p></div>)}</div></div></section>

        <section id="depoimentos" className="bg-white px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#c94676]">Famílias que confiam</p><h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[#4a2938] md:text-5xl">Pequenas conquistas, grandes mudanças.</h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="rounded-3xl bg-[#fff4f8] p-7"><div className="flex gap-1 text-[#e58ba7]">{[1,2,3,4,5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><blockquote className="mt-6 font-display text-[19px] leading-7 tracking-[-0.02em] text-[#583343]">“{item.quote}”</blockquote><figcaption className="mt-7 border-t border-[#f1dbe4] pt-5"><p className="text-sm font-bold text-[#583343]">{item.name}</p><p className="mt-1 text-xs text-[#9f7786]">{item.role}</p></figcaption></figure>)}</div></div></section>

        <section id="faq" className="bg-[#fff8fb] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[0.7fr_1fr]"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#c94676]">Vamos conversar?</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#4a2938]">Tudo bem. Monica explica para você.</h2></div><div>{faqs.map((faq, index) => <div key={faq.question} className="border-b border-[#f1dbe4] py-5 first:pt-0"><button className="flex w-full items-center justify-between gap-4 text-left font-display text-lg font-semibold tracking-[-0.025em] text-[#583343]" onClick={() => setOpenFaq(openFaq === index ? null : index)}>{faq.question}<ChevronDown size={19} className={`shrink-0 text-[#c94676] transition ${openFaq === index ? "rotate-180" : ""}`} /></button>{openFaq === index && <p className="mt-3 max-w-lg text-sm leading-6 text-[#896d7a]">{faq.answer}</p>}</div>)}</div></div></section>

        <section className="px-5 py-16 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-[#c94676] px-7 py-12 text-white md:px-14 md:py-16"><div className="absolute -right-20 -top-36 h-80 w-80 rounded-full border-[45px] border-[#df7698]/20" /><div className="relative max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#f7c0d2]">Cuidado especializado para seu pequeno</p><h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">Mais tranquilidade para respirar, brincar e crescer.</h2><p className="mt-5 text-base leading-7 text-[#f8dce6]">Agende uma conversa com Monica Daniele e descubra como a fisioterapia pode apoiar a saúde respiratória da sua criança.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#c94676] transition hover:-translate-y-1 hover:bg-[#fff0f5]">Agendar pelo WhatsApp <MessageCircle size={17} /></a></div></div></section>
      </main>

      <footer className="border-t border-[#f1dbe4] bg-white px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><a href="#inicio" className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#c94676] text-white"><Sparkles size={17} /></span><span className="font-display text-lg font-semibold tracking-[-0.04em]">Fisio <span className="text-[#d66a91]">Monica Daniele</span></span></a><p className="mt-4 max-w-xs text-sm leading-6 text-[#9f7786]">Fisioterapia respiratória infantil com técnica, presença e acolhimento em São Luís.</p></div><div className="flex flex-col gap-3 text-sm text-[#7c5869] md:items-end"><div className="flex gap-5"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-[#c94676]">WhatsApp</a><a href="tel:+5599981557721" className="transition hover:text-[#c94676]">(99) 98155-7721</a><a href="#inicio" className="transition hover:text-[#c94676]"><Instagram size={17} /></a></div><p className="text-xs text-[#b28c9a]">© 2024 Fisio Monica Daniele. Respirar bem é viver melhor.</p></div></div></footer>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#d24c7d] text-white shadow-xl shadow-[#d24c7d]/30 transition hover:scale-105" aria-label="Falar pelo WhatsApp"><MessageCircle size={25} /></a>
    </div>
  );
}
