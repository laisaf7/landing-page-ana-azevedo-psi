import { Monitor } from 'lucide-react';
import Reveal from './Reveal';

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="py-20 lg:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
                    <Reveal>
                        <h2 className="text-4xl font-serif text-gray-900 leading-tight">Como funciona a terapia</h2>
                        <div className="w-12 h-[1px] bg-primary mt-6"></div>
                    </Reveal>

                    <Reveal delay={150}>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            A terapia é um processo construído em parceria, respeitando sua história, suas
                            necessidades e seus objetivos.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-10">
                            Durante os encontros, buscamos compreender padrões emocionais, pensamentos e
                            comportamentos que possam estar gerando sofrimento ou dificultando seu bem-estar,
                            favorecendo a construção de novas possibilidades de escolha e enfrentamento.
                        </p>

                        <div className="flex items-start gap-4 border-l-2 border-accent bg-white p-6">
                            <Monitor className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                            <p className="text-gray-800 leading-relaxed">
                                Os atendimentos são realizados online, em um ambiente seguro, sigiloso e acolhedor.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}