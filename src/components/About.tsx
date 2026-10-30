import Reveal from './Reveal';
import CountUp from './Countup';
import profileImg2 from '../assets/Ana-Azevedo-2.jpeg';

export default function About() {
    return (
        <section id="sobre" className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal className="relative">
                        <div className="absolute -inset-4 border border-accent rounded-4xl z-0 hidden lg:block"></div>
                        <div className="aspect-square lg:aspect-[4/5] bg-stone-200 rounded-4xl relative z-10 w-full">
                            <img src={profileImg2} alt="Consultório ou Psicóloga" className="w-full h-full object-cover border-transparent rounded-4xl" />
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-accent font-script text-3xl mb-2">Sobre mim</p>
                        <h2 className="text-4xl font-serif text-gray-900 mb-8 leading-tight">
                            Acolhimento com <span className="italic text-primary">presença</span> <br />e escuta
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">Olá, eu sou Ana Azevedo, psicóloga.</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Muitas mulheres chegam à terapia sentindo que precisam dar conta de tudo, mas sem
                            saber como cuidar de si mesmas. Ansiedade, autocobrança, insegurança e dificuldades nos
                            relacionamentos costumam fazer parte dessa jornada.
                        </p>
                        <p className="text-gray-600 mb-12 leading-relaxed">
                            Acredito que mudanças significativas acontecem quando aprendemos a nos olhar com mais
                            consciência, acolhimento e responsabilidade. Meu papel é caminhar ao lado de cada
                            paciente nesse processo, oferecendo um espaço de escuta, reflexão e crescimento
                            emocional.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                            <div>
                                <h4 className="text-2xl font-serif text-primary mb-1">CRP</h4>
                                <p className="text-xs tracking-wider text-gray-500 uppercase">Registrada</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-serif text-primary mb-1">
                                    <CountUp end={8} suffix="+" />
                                </h4>
                                <p className="text-xs tracking-wider text-gray-500 uppercase">Anos de Experiência</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-serif text-primary mb-1">Online</h4>
                                <p className="text-xs tracking-wider text-gray-500 uppercase">Atendimento Remoto</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}