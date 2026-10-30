import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logoGreen from '../assets/Logo-verde.webp';
import { scrollToSection } from '../utils/Scrolltosection';

const NAV_LINKS = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#abordagem', label: 'Abordagem' },
    { href: '#faq', label: 'FAQ' },
];

const SECTION_IDS = ['inicio', 'sobre', 'servicos', 'abordagem', 'faq', 'contato'];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(() => window.scrollY > 20);
    const [activeSection, setActiveSection] = useState('');

    // Header encolhe e ganha fundo/sombra ao rolar
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Destaca o link da seção que está no meio da tela
    useEffect(() => {
        const elements = SECTION_IDS
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id === 'inicio' ? '' : entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const goTo = (href: string) => {
        const found = scrollToSection(href);
        if (found) setIsMobileMenuOpen(false);
        return found;
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (goTo(href)) e.preventDefault();
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${scrolled ? 'bg-cream/95 border-stone-200 shadow-sm' : 'bg-cream/70 border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center transition-[height] duration-300 ${scrolled ? 'h-20' : 'h-24'}`}>
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center bg-white">
                            <img src={logoGreen} alt="Logo de Ana Azevedo" />
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`relative text-sm font-medium uppercase tracking-wide transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-300 ${isActive
                                        ? 'text-primary after:scale-x-100'
                                        : 'text-gray-600 hover:text-primary after:scale-x-0 hover:after:scale-x-100'
                                        }`}
                                >
                                    {label}
                                </a>
                            );
                        })}

                    </nav>

                    <div className="hidden md:block">
                        <Button onClick={() => goTo('#contato')}>Agendar Consulta</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600" aria-label="Abrir menu">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-stone-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`block px-3 py-2 ${isActive ? 'text-primary font-medium' : 'text-gray-600'}`}
                                >
                                    {label}
                                </a>
                            );
                        })}

                        <div className="px-3 mt-4">
                            <Button className="w-full" onClick={() => goTo('#contato')}>Agendar Consulta</Button>
                        </div>
                    </div>
                </div>
            )
            }
        </header >
    );
}