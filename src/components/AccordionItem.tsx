import { Plus, Minus } from 'lucide-react';

type AccordionItemProps = {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
};

// Item controlado: quem decide qual está aberto é o componente pai (FAQ)
export default function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className={`border ${isOpen ? 'border-primary' : 'border-stone-200'} bg-white mb-4 transition-all duration-300`}>
            <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span className={`font-serif text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <Minus className="text-primary w-5 h-5 flex-shrink-0" strokeWidth={1} />
                ) : (
                    <Plus className="text-gray-400 w-5 h-5 flex-shrink-0" strokeWidth={1} />
                )}
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}