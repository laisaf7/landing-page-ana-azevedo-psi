import React from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = {
    children: React.ReactNode;
    /** Atraso em ms, útil para entrar em sequência (cards, listas) */
    delay?: number;
    className?: string;
};

/** Faz o conteúdo aparecer com fade + subida leve quando entra na tela. */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const [ref, inView] = useInView<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                } ${className}`}
        >
            {children}
        </div>
    );
}