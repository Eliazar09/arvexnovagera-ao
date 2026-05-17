import React from 'react';

export const PdfTemplate = React.forwardRef<HTMLDivElement, { data: any }>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 0,
        width: '800px',
        minHeight: '1130px',
        backgroundColor: '#0a0a0b',
        color: '#ffffff',
        padding: '60px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ color: '#e63946', fontSize: '32px', margin: 0, letterSpacing: '2px', fontWeight: 300 }}>ARVEX AGENCY</h1>
          <p style={{ color: '#888', fontSize: '14px', margin: '5px 0 0 0', fontWeight: 300 }}>Briefing de Proyecto Digital</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', color: '#666', margin: 0, letterSpacing: '1px' }}>FECHA DEL DOCUMENTO</p>
          <p style={{ fontSize: '14px', margin: '2px 0 0 0' }}>{new Date().toLocaleDateString('es-419')}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Datos del Cliente</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Nombre:</strong> {data.name || 'No informado'}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Email:</strong> {data.email}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>WhatsApp:</strong> {data.whatsappCode} {data.whatsappNumber}</p>
        </div>
        <div>
          <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Empresa del Cliente</h3>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Nombre:</strong> {data.company || 'No informada'}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Segmento:</strong> {data.segment}</p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}><strong style={{ color: '#999' }}>Sitio Actual:</strong> {data.hasSite === 'sim' ? data.currentSiteUrl || 'Sí, tiene' : 'No tiene'}</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Alcance del Servicio</h3>
        <p style={{ fontSize: '20px', margin: '0 0 15px 0', fontWeight: 300 }}>{data.service}</p>
        <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
          <div>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Objetivo Principal</span>

            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#ddd' }}>{data.goal}</p>
          </div>
          <div>
            <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Plazo Deseado</span>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#ddd' }}>{data.timeline}</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Detalles y Referencias del Proyecto</h3>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.01)', padding: '20px', borderLeft: '2px solid #e63946' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#ccc', whiteSpace: 'pre-wrap', margin: 0 }}>
            {data.message}
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', paddingTop: '30px', marginTop: '40px' }}>
        <h3 style={{ fontSize: '12px', color: '#e63946', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Próximos Pasos (Contacto)</h3>
        {data.contactMethod === 'meet' ? (
          <p style={{ fontSize: '14px', margin: 0, color: '#aaa' }}>
            El cliente solicitó una reunión de alineación vía <strong>Google Meet</strong> programada para <strong>{data.meetDate} a las {data.meetTime}</strong>.
          </p>
        ) : (
          <p style={{ fontSize: '14px', margin: 0, color: '#aaa' }}>
            El cliente espera ser contactado vía <strong>WhatsApp o Email</strong> en hasta 24 horas para el envío de propuesta.
          </p>
        )}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <p style={{ fontSize: '10px', color: '#444', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
          ARVEXAGENCY.ONLINE • BOUTIQUE DE TECNOLOGÍA
        </p>
      </div>
    </div>
  );
});

PdfTemplate.displayName = 'PdfTemplate';
