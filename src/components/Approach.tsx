import React, { useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { prefersReducedMotion } from '../utils/motion';
import natureImg from '../assets/mulher-natureza.webp';

const PARALLAX_SPEED = 0.15;

export default function Approach() {
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    // Parallax: o fundo se move mais devagar que o texto
    useEffect(() => {
        if (prefersReducedMotion()) return;

        let frame = 0;

        const update = () => {
            frame = 0;
            const section = sectionRef.current;
            const bg = bgRef.current;
            if (!section || !bg) return;

            const rect = section.getBoundingClientRect();
            const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
            bg.style.transform = `translate3d(0, ${distanceFromCenter * -PARALLAX_SPEED}px, 0)`;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <section ref={sectionRef} id="abordagem" className="relative py-28 lg:py-40 bg-stone-900 text-white overflow-hidden">
            <div ref={bgRef} className="absolute inset-0 z-0 opacity-40 will-change-transform">
                <img src={natureImg} alt="Fundo paisagem" className="w-full h-full object-cover" />
            </div>

            <Reveal className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <p className="text-accent font-script text-3xl mb-4">Minha abordagem</p>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                    Cada pessoa é única.<br /> Cada processo, singular.
                </h2>
                <p className="text-lg text-stone-200 leading-relaxed max-w-3xl mx-auto">
                    Trabalho com uma abordagem humanista e integrativa, respeitando o tempo de cada pessoa.
                    Meu foco é criar um vínculo terapêutico de confiança, onde você possa explorar sua interioridade com liberdade e segurança.
                </p>
            </Reveal>
        </section>
    );
}