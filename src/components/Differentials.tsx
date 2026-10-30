import React from 'react';
import Reveal from './Reveal';

const DIFFERENTIALS = [
    { title: 'Escuta ativa', text: 'Presença plena em cada sessão' },
    { title: 'Sem julgamentos', text: 'Espaço livre para ser você' },
    { title: 'Humanista', text: 'Foco no potencial humano' },
    { title: 'Integrativa', text: 'Diversas abordagens em harmonia' },
];

export default function Differentials() {
    return (
        <section className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x lg:divide-white/20">
                    {DIFFERENTIALS.map(({ title, text }, index) => (
                        <Reveal key={title} delay={index * 120} className="px-4">
                            <h4 className="font-serif text-xl mb-2">{title}</h4>
                            <p className="text-sm text-stone-200 font-light">{text}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}