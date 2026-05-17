export type Testimonial = {
  id: string;
  quote: string;
  result: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  rating: 5 | 4;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'El sitio quedó mejor de lo que imaginaba — y en 4 días ya estaba en línea. En dos meses los agendamientos online se triplicaron. Un diseño que convence antes de decir una palabra.',
    result: '+3× agendamientos',
    author: 'Rafaela M.',
    role: 'Fundadora',
    company: 'Clínica Lumina',
    initials: 'RM',
    color: '#e63946',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '2',
    quote: 'Era un caos en WhatsApp — clientes sin respuesta, confirmaciones perdidas. Ahora todo entra automáticamente al sistema. El equipo trabaja sin apuros y el cliente recibe confirmación en segundos.',
    result: '70% menos trabajo manual',
    author: 'Carlos F.',
    role: 'Socio-Gerente',
    company: 'Distribuidora Norte',
    initials: 'CF',
    color: '#25d366',
    rating: 5,
    service: 'Automatización',
  },
  {
    id: '3',
    quote: 'Lo contraté pensando que era solo un sitio. Recibí una máquina de cerrar negocios. En 3 semanas ya había recuperado la inversión con nuevos contratos que llegaron por el sitio.',
    result: 'ROI en 3 semanas',
    author: 'Marcos V.',
    role: 'CEO',
    company: 'Nova Era Constructora',
    initials: 'MV',
    color: '#e63946',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '4',
    quote: 'La tienda quedó preciosa y funciona perfectamente en el celular. Vendemos a distintas regiones — nunca imaginamos llegar tan lejos con nuestros productos artesanales.',
    result: 'Ventas en 3 regiones',
    author: 'María P.',
    role: 'Propietaria',
    company: 'Artesanías del Bosque',
    initials: 'MP',
    color: '#f59e0b',
    rating: 5,
    service: 'E-commerce',
  },
  {
    id: '5',
    quote: 'Mi WhatsApp se convirtió en un robot de ventas. Responde, califica al cliente y ya envía el link de pago. Yo solo entro a cerrar el negocio que ya llegó listo.',
    result: '4× más leads calificados',
    author: 'Tatiana A.',
    role: 'Gerente',
    company: 'Red Farmacias Norte',
    initials: 'TA',
    color: '#25d366',
    rating: 5,
    service: 'Automatización',
  },
  {
    id: '6',
    quote: 'Necesitaba un CRM integrado a mi proceso. Lo entregaron en 12 días, funciona sin fallos y el soporte resolvió todo al instante. Nunca vi tanta agilidad en una agencia.',
    result: 'Entrega en 12 días',
    author: 'Bruno L.',
    role: 'Director Comercial',
    company: 'Inmobiliaria Panorama',
    initials: 'BL',
    color: '#e63946',
    rating: 5,
    service: 'Sistema',
  },
  {
    id: '7',
    quote: 'Tenía miedo de gastar sin resultado. Pedí garantía, la dieron. Al ver el diseño en la primera revisión ya supe que iba a funcionar. Hoy mi restaurante llena los viernes por el sitio.',
    result: 'Reservas llenas',
    author: 'Juan T.',
    role: 'Propietario',
    company: 'Toka Restaurante',
    initials: 'JT',
    color: '#f59e0b',
    rating: 5,
    service: 'Sitios Web',
  },
  {
    id: '8',
    quote: 'Mi clínica vet creció un 60% en atenciones después del nuevo sitio. Google me muestra ahora, WhatsApp se llenó. No sabía que un sitio podía cambiar tanto el negocio.',
    result: '+60% en atenciones',
    author: 'Dra. Camila R.',
    role: 'Directora Clínica',
    company: 'Hospital Veterinario RR',
    initials: 'CR',
    color: '#10b981',
    rating: 5,
    service: 'Sitios Web',
  },
];
