import React from 'react';
import Button from './Button';
import profileImg from '../assets/Ana-Azevedo.jpeg';
import { scrollToSection } from '../utils/Scrolltosection';

export default function Hero() {
    return (
        <section id="inicio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-accent font-script text-3xl mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>Bem-vindo ao meu espaço</p>
                    <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        Um lugar seguro <br />
                        <span className="italic text-primary">para se encontrar</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: '500ms' }}>
                        Desenvolvimento emocional e relacional para mulheres que desejam viver com mais
                        consciência, equilíbrio e autenticidade.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '700ms' }}>
                        <Button onClick={() => scrollToSection('#contato')}>Agendar Consulta</Button>
                        <Button variant="secondary" onClick={() => scrollToSection('#sobre')}>Conhecer Mais</Button>
                    </div>
                </div>
                <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <div className="aspect-[4/5] bg-stone-200 rounded-4xl w-full relative overflow-hidden">
                        <img src={profileImg} alt="Psicóloga Ana Azevedo" className="w-full h-full object-cover border-transparent rounded-4xl" />
                        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                            <h2 className="text-black text-7xl font-script opacity-50 px-4 text-center">Ana Azevedo</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}