"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const WA = "https://wa.me/5531990694011?text=Oi!%20Vim%20pelo%20site%20do%20Instituto%20Habitat.";
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !ref.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".h-eyebrow", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .fromTo(".h-line .w", { yPercent: 115 }, { yPercent: 0, duration: 1, stagger: 0.08 }, 0.2)
        .fromTo(".h-sub", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, 0.7)
        .fromTo(".h-cta", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.85)
        .fromTo(".h-stat", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, 1);
    }, ref);
    return () => ctx.revert();
  }, []);
  const line = (text: string) => text.split(" ").map((w, i, a) => (<span key={i} className="inline-block overflow-hidden pb-[0.09em] -mb-[0.09em] align-bottom"><span className="w inline-block will-change-transform">{w}</span>{i < a.length - 1 ? " " : ""}</span>));
  return (<section ref={ref} className="relative flex min-h-[100dvh] items-end overflow-hidden"><img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop" alt="Mata atlântica preservada" className="absolute inset-0 h-full w-full object-cover" loading="eager"/><div className="absolute inset-0 bg-gradient-to-t from-[#0B2E23] via-[#0B2E23]/55 to-[#0B2E23]/25" /><div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28"><p className="h-eyebrow font-mono2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur">Engenharia • Meio ambiente • Veterinária</p><h1 className="font-display mt-5 max-w-5xl text-[13vw] uppercase leading-[0.92] sm:text-7xl lg:text-8xl" aria-label="Quem cuida da mata, cuida de tudo"><span className="h-line block">{line("Quem cuida")}</span><span className="h-line block">{line("da mata,")}</span><span className="h-line block text-[#7BD88A]">{line("cuida de tudo.")}</span></h1><p className="h-sub mt-5 max-w-[52ch] font-semibold leading-relaxed text-white/80">Resgate de fauna, clínica veterinária, engenharia ambiental e educação — direto de Mariana para a mata.</p><div className="mt-7 flex flex-wrap gap-3"><a href={WA} target="_blank" className="h-cta btn-press rounded-full bg-[#E8A33D] px-7 py-3.5 font-black text-[#0B2E23]">Agendar consulta</a><a href="#gratuito" className="h-cta btn-press rounded-full border-2 border-white/30 px-6 py-3 font-black backdrop-blur hover:border-white">Consulta gratuita</a></div><dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/20 pt-5"><div className="h-stat"><dt className="font-display text-3xl text-[#7BD88A] md:text-4xl">7,6 mil</dt><dd className="font-mono2 text-[11px] font-bold uppercase tracking-widest text-white/60">seguidores</dd></div><div className="h-stat"><dt className="font-display text-3xl text-[#7BD88A] md:text-4xl">7 frentes</dt><dd className="font-mono2 text-[11px] font-bold uppercase tracking-widest text-white/60">de atuação</dd></div><div className="h-stat"><dt className="font-display text-3xl text-[#7BD88A] md:text-4xl">4/dia</dt><dd className="font-mono2 text-[11px] font-bold uppercase tracking-widest text-white/60">consultas gratuitas</dd></div></dl></div></section>);
}
