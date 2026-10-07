"use client";
import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const reduce = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export function Words({ text, className, as: Tag = "span" }: { text: string; className?: string; as?: "span" | "h1" | "h2" }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (reduce() || !ref.current) return;
    const words = ref.current.querySelectorAll(".w");
    const ctx = gsap.context(() => {
      gsap.fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.07, ease: "expo.out", scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (<Tag ref={ref as never} className={className} aria-label={text}>{text.split(" ").map((w, i) => (<span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"><span className="w inline-block will-change-transform" aria-hidden="true">{w}</span>{i < text.split(" ").length - 1 ? " " : ""}</span>))}</Tag>);
}
export function Rise({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduce() || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.7, delay, ease: "expo.out", scrollTrigger: { trigger: ref.current, start: "top 90%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, [delay]);
  return <div ref={ref} className={className}>{children}</div>;
}
export function ClipImg({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduce() || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, { clipPath: "inset(12% 8% 12% 8%)", opacity: 0.5 }, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
