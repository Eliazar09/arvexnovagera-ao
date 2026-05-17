export type Service = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  deliverables: string[];
  stack: string[];
  highlights: { icon: string; label: string }[];
  isCore: boolean;
  packages: Package[];
  faq: { q: string; a: string }[];
};

export type Package = {
  name: string;
  from: string;
  deadline: string;
  features: string[];
  highlighted?: boolean;
};

export const services: Service[] = [
  {
    slug: 'sites',
    number: '01',
    title: 'Sitios Web',
    tagline: 'Cualquier tipo de sitio web, creado desde cero con calidad.',
    summary: 'Del briefing al deploy: UX, diseño, código y performance bajo un mismo techo.',
    description:
      'Creamos cualquier tipo de sitio web — institucional, portafolio, landing page, blog, sitio de servicios. Cada proyecto empieza desde cero, sin plantilla. El resultado: un sitio rápido, atractivo y que representa tu marca de verdad.',
    deliverables: [
      'Sitio institucional o landing page',
      'Diseño personalizado (sin plantillas)',
      'Desarrollo en Next.js o WordPress',
      'SEO técnico básico incluido',
      'Responsive para móvil y escritorio',
      'Entrega con capacitación',
    ],
    stack: ['Next.js', 'WordPress', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: [
      { icon: 'Zap', label: 'Carga rápida' },
      { icon: 'Search', label: 'SEO incluido' },
      { icon: 'Smartphone', label: 'Mobile-first' },
      { icon: 'Palette', label: 'Diseño exclusivo' },
      { icon: 'Shield', label: 'Seguro y estable' },
      { icon: 'RefreshCw', label: 'Soporte post-entrega' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Landing Page',
        from: 'USD 300',
        deadline: '1–5 días hábiles',
        features: [
          '1 página completa',
          'Diseño exclusivo',
          'Formulario de contacto',
          'Mobile responsive',
          'Deploy incluido',
        ],
      },
      {
        name: 'Sitio Completo',
        from: 'USD 700',
        deadline: '1–5 días hábiles',
        features: [
          'Hasta 6 páginas',
          'Diseño exclusivo',
          'SEO básico',
          'Blog opcional',
          'Panel de edición',
          'Soporte 30 días',
        ],
        highlighted: true,
      },
      {
        name: 'Proyecto Custom',
        from: 'A consultar',
        deadline: 'A definir',
        features: [
          'Alcance ilimitado',
          'Integraciones custom',
          'E-commerce opcional',
          'Soporte extendido',
          'SLA garantizado',
        ],
      },
    ],
    faq: [
      { q: '¿Entregan el código fuente?', a: 'Sí. Todo el código es tuyo al finalizar el proyecto, sin ataduras ni lock-in de plataforma.' },
      { q: '¿Puedo actualizar el sitio solo?', a: 'Sí. Configuramos un panel sencillo donde puedes editar textos e imágenes sin necesidad de un programador.' },
      { q: '¿El sitio aparece en Google?', a: 'Sí. El SEO técnico básico está incluido en todos los planes — título, descripción, sitemap y velocidad optimizada.' },
      { q: '¿Cuál es la diferencia entre Landing Page y Sitio Completo?', a: 'La Landing Page es una página única enfocada en conversión. El Sitio Completo tiene múltiples páginas y un panel de gestión de contenido.' },
    ],
  },
  {
    slug: 'sistemas',
    number: '02',
    title: 'Sistemas Web',
    tagline: 'Sistemas de agendamiento, portales y paneles a la medida.',
    summary: 'Sistemas personalizados que resuelven problemas reales de tu negocio.',
    description:
      'Desarrollamos sistemas web personalizados: sistema de agendamiento online, panel administrativo, portal del cliente, registro de productos, control de inventario simple. Si tienes un proceso manual que podría ser digital, nosotros lo construimos.',
    deliverables: [
      'Sistema de agendamiento online',
      'Panel administrativo',
      'Portal del cliente / área privada',
      'Registro y gestión de datos',
      'Reportes y dashboards',
      'Documentación y capacitación',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      { icon: 'Calendar', label: 'Agendamiento online' },
      { icon: 'LayoutDashboard', label: 'Panel admin' },
      { icon: 'Users', label: 'Área del cliente' },
      { icon: 'Database', label: 'Base de datos' },
      { icon: 'BarChart2', label: 'Reportes' },
      { icon: 'Lock', label: 'Login seguro' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Básico',
        from: 'USD 600',
        deadline: '1–15 días',
        features: [
          'Sistema de agendamiento',
          'Panel básico de gestión',
          'Login y acceso seguro',
          'Soporte 30 días',
        ],
      },
      {
        name: 'Completo',
        from: 'USD 1.400',
        deadline: '1–30 días',
        features: [
          'Sistema completo personalizado',
          'Dashboard con reportes',
          'Notificaciones por email/WhatsApp',
          'Portal del cliente',
          'Soporte 60 días',
        ],
        highlighted: true,
      },
      {
        name: 'A Medida',
        from: 'A consultar',
        deadline: 'A definir',
        features: [
          'Alcance personalizado',
          'Integraciones externas',
          'App móvil opcional',
          'SLA garantizado',
        ],
      },
    ],
    faq: [
      { q: '¿El sistema funciona en el celular?', a: 'Sí. Todos los sistemas son responsive y funcionan en cualquier dispositivo.' },
      { q: '¿Mis clientes pueden agendar solos?', a: 'Sí. El sistema de agendamiento permite que tus clientes elijan horario, servicio y paguen online si es necesario.' },
      { q: '¿Y si necesito una funcionalidad específica?', a: 'Desarrollamos a medida. Cuéntame qué necesitas y hacemos un presupuesto.' },
    ],
  },
  {
    slug: 'automacao',
    number: '03',
    title: 'Automatización',
    tagline: 'WhatsApp, flujos e integraciones que trabajan por ti.',
    summary: 'Automatiza atención, notificaciones y procesos repetitivos.',
    description:
      'Configuramos automatizaciones para tu negocio: atención automática en WhatsApp, confirmación de citas por mensaje, notificaciones automáticas, integración entre sistemas y flujos que eliminan las tareas manuales de tu día a día.',
    deliverables: [
      'Atención automática en WhatsApp',
      'Confirmación y recordatorio de citas',
      'Notificaciones por WhatsApp y email',
      'Integración entre plataformas (n8n/Make)',
      'Respuestas automáticas y chatbot sencillo',
      'Documentación del flujo',
    ],
    stack: ['n8n', 'Make', 'WhatsApp Business API', 'Zapier', 'Node.js'],
    highlights: [
      { icon: 'MessageSquare', label: 'WhatsApp Business' },
      { icon: 'Bell', label: 'Notificaciones auto' },
      { icon: 'GitBranch', label: 'Flujos n8n / Make' },
      { icon: 'Repeat', label: 'Sin trabajo manual' },
      { icon: 'Clock', label: 'Funciona 24/7' },
      { icon: 'Zap', label: 'Respuesta inmediata' },
    ],
    isCore: true,
    packages: [
      {
        name: 'Básico',
        from: 'USD 160',
        deadline: '1–3 días',
        features: [
          'Mensaje automático en WhatsApp',
          'Confirmación de citas',
          'Hasta 2 flujos',
          'Soporte 30 días',
        ],
      },
      {
        name: 'Completo',
        from: 'USD 500',
        deadline: '1–8 días',
        features: [
          'Chatbot WhatsApp',
          'Flujos ilimitados',
          'Integración con tu sistema',
          'Notificaciones automáticas',
          'Soporte 60 días',
        ],
        highlighted: true,
      },
      {
        name: 'A Medida',
        from: 'A consultar',
        deadline: 'A definir',
        features: [
          'Automatización completa del negocio',
          'Múltiples integraciones',
          'CRM integrado',
          'Mantenimiento mensual',
        ],
      },
    ],
    faq: [
      { q: '¿Se necesita WhatsApp Business?', a: 'Sí. Necesitas tener WhatsApp Business configurado. Te ayudamos en la configuración si hace falta.' },
      { q: '¿El chatbot es inteligente?', a: 'Para respuestas simples y menús, sí. Para IA conversacional avanzada, es un proyecto aparte.' },
      { q: '¿Funciona con mi sistema de agendamiento?', a: 'Sí. Se integra con el sistema que ya usas o con el que nosotros desarrollemos para ti.' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
