export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: '1',
    question: '¿Cuál es el plazo promedio de entrega?',
    answer:
      'Depende del alcance. Sitios simples: 7–12 días. Sitios complejos con CMS: 18–28 días. Automatizaciones: 5–15 días. E-commerce completo: 25–40 días. Identidad visual: 10–18 días. Damos un plazo preciso después del briefing.',
  },
  {
    id: '2',
    question: '¿Cómo funciona el proceso de pago?',
    answer:
      'Trabajamos con 50% de adelanto antes de empezar y 50% en la entrega. En proyectos grandes, conversamos las condiciones.',
  },
  {
    id: '3',
    question: '¿Necesito firmar un contrato?',
    answer:
      'Sí. Antes de cualquier trabajo, firmamos un contrato que especifica el alcance, plazo, forma de pago y derechos sobre el entregable. Es protección para ambas partes.',
  },
  {
    id: '4',
    question: '¿El código del sitio es mío?',
    answer:
      'Siempre. Al finalizar el proyecto, recibes el repositorio completo en GitHub, sin dependencias propietarias ni lock-in de plataforma. El código es tuyo.',
  },
  {
    id: '5',
    question: '¿Usan inteligencia artificial en los proyectos?',
    answer:
      'Usamos IA como herramienta de productividad — para investigación, generación de variaciones y optimización. El diseño, la estrategia y el código son revisados y construidos por personas. La IA acelera, no reemplaza el criterio.',
  },
  {
    id: '6',
    question: '¿Y el soporte después de la entrega?',
    answer:
      'Todos los proyectos incluyen soporte técnico por 30 a 60 días después de la entrega, según el plan. Bugs y ajustes dentro del alcance acordado se resuelven sin costo adicional.',
  },
  {
    id: '7',
    question: '¿Atienden clientes fuera de Brasil?',
    answer:
      'Sí. La mayoría de nuestros proyectos se conduce 100% online. Atendemos toda América Latina. Trabajamos en español, portugués e inglés.',
  },
  {
    id: '8',
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'La inversión varía según el alcance, complejidad y plazo de cada proyecto. Lo conversamos en la llamada de briefing — agenda gratis y sin compromiso.',
  },
];
