import React from 'react';
import { MapPin, Clock, Smartphone } from 'lucide-react';
import Reveal from './Reveal';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { whatsappUrl, instagramUrl, WHATSAPP_DISPLAY, INSTAGRAM_HANDLE } from '../config/contact';

const STEPS = [
    {
        title: 'Você me chama no WhatsApp',
        text: 'Uma mensagem rápida já basta. Sem formulários e sem compromisso.',
    },
    {
        title: 'Conversamos sobre o que te trouxe aqui',
        text: 'Respondo com carinho, tiro suas dúvidas e entendo o que você está buscando.',
    },
    {
        title: 'Marcamos a primeira sessão',
        text: 'Combinamos o melhor dia e horário, presencial ou online.',
    },
];

export default function Contact() {
    return (
        <section id="contato" className="py-20 lg:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <Reveal className="flex flex-col justify-center">
                        <p className="text-accent font-script text-3xl mb-2">Vamos conversar?</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                            Agende sua <span className="italic text-primary">consulta</span>
                        </h2>
                        <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                            A primeira sessão é um momento de conhecimento mútuo, sem compromisso. Você pode tirar todas as suas dúvidas e sentir se há identificação antes de iniciar o processo terapêutico.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <MapPin className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-1">Localização</h4>
                                    <p className="text-gray-800">Atendimento presencial e online</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-1">Horários</h4>
                                    <p className="text-gray-800">Segunda a sexta, das 8h às 20h</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Smartphone className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-1">WhatsApp</h4>
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors">
                                        {WHATSAPP_DISPLAY}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <InstagramIcon className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-1">Instagram</h4>
                                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-primary transition-colors">
                                        @{INSTAGRAM_HANDLE}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150} className="bg-white p-8 lg:p-12 shadow-sm border border-stone-200 rounded-lg">
                        <h3 className="font-serif text-2xl mb-2 text-gray-800">Dê o primeiro passo</h3>
                        <p className="text-gray-600 text-sm mb-8">
                            Começar a terapia pode parecer difícil, mas o caminho é simples:
                        </p>

                        <ol className="space-y-6 mb-10">
                            {STEPS.map(({ title, text }, index) => (
                                <li key={title} className="flex gap-4">
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-accent font-serif text-lg text-accent">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800 mb-1">{title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-3 bg-primary rounded-xl px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-primary-dark"
                        >
                            <WhatsAppIcon className="h-5 w-5" />
                            Chamar no WhatsApp
                        </a>

                        <p className="mt-6 text-center text-sm text-gray-500">
                            Prefere conhecer meu trabalho antes?{' '}
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
                            >
                                <InstagramIcon className="h-4 w-4" />
                                @{INSTAGRAM_HANDLE}
                            </a>
                        </p>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}