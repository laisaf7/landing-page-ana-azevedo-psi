import { ArrowUp } from 'lucide-react';
import logoWhite from '../assets/Logo.webp';

export default function Footer() {
    return (
        <footer className="bg-ink text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8">
                <div className="flex justify-center md:justify-start">
                    <img src={logoWhite} alt="Logo branca de Ana Azevedo" className="w-24 h-24 object-contain" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="uppercase tracking-widest text-sm text-stone-300 mb-6">
                        Psicóloga Clínica • CRP 06/211113
                    </p>

                    <div className="w-16 h-[1px] bg-primary mb-6"></div>

                    <p className="text-sm text-stone-500 mb-6">
                        &copy; 2026 Ana Azevedo. Todos os direitos reservados.
                    </p>

                    <div className="w-16 h-[1px] bg-primary mb-6"></div>

                    <p className="tracking-widest text-sm text-stone-300">
                        Feito por{' '}
                        <a href="https://github.com/laisaf7" className="hover:text-white underline underline-offset-4">
                            Laís Azevedo Freitas
                        </a>
                    </p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} aria-label="Voltar ao topo"
                        className="flex items-center gap-2 border border-primary rounded-xl px-5 py-3 text-xs font-semibold uppercase tracking-widest text-stone-300 transition-colors duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                        Voltar ao topo
                        <ArrowUp className='h-4 w-4' />
                    </button>
                </div>
            </div>
        </footer>
    );
}