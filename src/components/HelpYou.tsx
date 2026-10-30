import React from 'react';
import { Check } from 'lucide-react';
import Reveal from './Reveal';

const DEMANDS = [
    'Ansiedade e insegurança',
    'Autocobrança e perfeccionismo',
    'Dificuldades nos relacionamentos',
    'Baixa autoestima',
    'Dificuldade em estabelecer limites',
    'Momentos de transição e amadurecimento pessoal',
];

export default function HelpYou() {
    return (
        <section id="como-posso-te-ajudar" className="py-20 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-accent font-script text-3xl mb-2">Você não está sozinha</p>
                    <h2 className="text-4xl font-serif text-gray-900">Como posso te ajudar</h2>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-6 mb-8"></div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Atendo mulheres que desejam compreender melhor suas emoções, fortalecer sua relação
                        consigo mesmas e construir vínculos mais saudáveis.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Algumas das demandas que acompanho incluem:
                    </p>
                </Reveal>

                <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DEMANDS.map((demand, index) => (
                        <Reveal key={demand} delay={(index % 3) * 120} className="h-full">
                            <div role="listitem" className="flex h-full items-center gap-4 border border-stone-200 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-accent text-accent">
                                    <Check className="h-4 w-4" strokeWidth={1.5} />
                                </span>
                                <span className="font-serif text-lg text-gray-800">{demand}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}