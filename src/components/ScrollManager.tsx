"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function ScrollManager() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    const id = requestAnimationFrame(raf);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => { window.removeEventListener("load", refresh); cancelAnimationFrame(id); lenis.destroy(); ScrollTrigger.getAll().forEach((s) => s.kill()); };
  }, []);
  return null;
}
