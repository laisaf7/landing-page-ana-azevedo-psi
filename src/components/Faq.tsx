import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import Reveal from './Reveal';

const FAQS = [
    {
        question: 'Como funciona a primeira sessão?',
        answer: 'A primeira sessão é um momento de apresentação e escuta. Conversamos sobre o que te trouxe à terapia, suas expectativas e como funciona o processo. Não há compromisso: você decide se quer continuar após esse primeiro encontro.',
    },
    {
        question: 'Qual é a frequência das sessões?',
        answer: 'Geralmente, as sessões ocorrem uma vez por semana, com duração de 50 minutos. A frequência pode ser ajustada conforme a sua necessidade e o andamento do processo terapêutico.',
    },
    {
        question: 'O atendimento online tem a mesma qualidade que o presencial?',
        answer: 'Sim. O atendimento online possui respaldo científico e segue rigorosamente os mesmos princípios éticos e de acolhimento do formato presencial, oferecendo comodidade sem perder a eficácia.',
    },
    {
        question: 'Quanto tempo dura um processo terapêutico?',
        answer: 'O tempo é muito singular e depende dos objetivos de cada pessoa. Alguns pacientes buscam terapia para questões pontuais (meses), enquanto outros desejam um autoconhecimento contínuo (anos).',
    },
    {
        question: 'As sessões são sigilosas?',
        answer: 'Absolutamente. O sigilo profissional é a base do trabalho do psicólogo, garantido pelo Código de Ética da profissão. Tudo o que é dito em sessão permanece em sessão.',
    },
    {
        question: 'Como posso agendar uma consulta?',
        answer: 'Você pode agendar entrando em contato pelo WhatsApp ou Instagram disponibilizados na seção de contato. Buscaremos juntos o melhor horário disponível na agenda.',
    },
];

export default function FAQ() {
    // Índice da pergunta aberta (null = todas fechadas). A primeira começa aberta.
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-cream">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal className="text-center mb-16">
                    <p className="text-accent font-script text-3xl mb-2">Tire suas dúvidas</p>
                    <h2 className="text-4xl font-serif text-gray-900">Perguntas frequentes</h2>
                    <div className="w-12 h-[1px] bg-primary mx-auto mt-6"></div>
                </Reveal>

                <Reveal delay={150} className="space-y-1">
                    {FAQS.map(({ question, answer }, index) => (
                        <AccordionItem
                            key={question}
                            question={question}
                            answer={answer}
                            isOpen={openIndex === index}
                            // clicar no aberto fecha; clicar em outro abre ele e fecha o anterior
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </Reveal>
            </div>
        </section>
    );
}