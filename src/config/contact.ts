// Dados de contato num só lugar.

// WhatsApp: código do país + DDD + número, só dígitos (ex.: 5511987654321)
export const WHATSAPP_NUMBER = '5511993910862';
// Como o número aparece escrito na seção de contato
export const WHATSAPP_DISPLAY = '(11) 99391-0862';
export const WHATSAPP_MESSAGE = 'Olá, Ana! Gostaria de agendar uma consulta.';

// Instagram: só o nome de usuário, sem o @
export const INSTAGRAM_HANDLE = 'a.anazevedo';

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;