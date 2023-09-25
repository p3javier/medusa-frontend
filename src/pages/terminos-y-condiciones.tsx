/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';

import InfoPage from '../templates/InfoPage';

const markdown = `

Fecha de vigencia: 24/09/2023

Bienvenido a **medusa.events** ("Nosotros" o "Plataforma"). Los siguientes términos y condiciones (los "Términos y Condiciones") regulan tu acceso y uso de nuestra plataforma, así como los servicios relacionados que ofrecemos a través de nuestros partners (los "Partners"). Al acceder a la plataforma y utilizar nuestros servicios, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con estos términos, por favor, no utilices nuestra plataforma.


## 1. SERVICIOS Y DESCRIPCIÓN

1.1. **medusa.events** es una plataforma en línea que permite a los usuarios buscar, reservar y participar en eventos y actividades organizados por nuestros Partners.

1.2. Los eventos y actividades ofrecidos en nuestra plataforma son proporcionados por nuestros Partners, y nosotros actuamos como intermediarios para facilitar la reserva y participación en los mismos.

2. RESERVAS Y PAGOS

2.1. Al realizar una reserva a través de nuestra plataforma, estás celebrando un contrato directamente con el Partner que ofrece el evento o actividad. Nosotros solo facilitamos la reserva y el proceso de pago.

2.2. Los precios y términos de pago de los eventos y actividades son establecidos por los Partners y pueden estar sujetos a cambios. Debes revisar los detalles de la reserva antes de confirmarla.

2.3. Los pagos realizados a través de nuestra plataforma son procesados de manera segura a través de terceros procesadores de pagos. Nosotros no almacenamos información de tarjetas de crédito.

3. RESPONSABILIDAD

3.1. medusa.events no es responsable de la organización o ejecución de los eventos y actividades ofrecidos por los Partners. Cualquier reclamación, queja o disputa relacionada con un evento debe dirigirse directamente al Partner correspondiente.

3.2. Nos esforzamos por proporcionar información precisa y actualizada en nuestra plataforma, pero no garantizamos la precisión ni la disponibilidad constante de la misma.

4. PRIVACIDAD

4.1. Tu privacidad es importante para nosotros. Consulta nuestra Política de Privacidad para obtener información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.

5. PROPIEDAD INTELECTUAL

5.1. Todos los derechos de propiedad intelectual relacionados con nuestra plataforma y su contenido pertenecen a **medusa.events** o a nuestros licenciantes. No se permite la reproducción o distribución no autorizada de ningún contenido de la plataforma.

6. MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES

6.1. Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia tan pronto como sean publicadas en la plataforma. Te recomendamos revisar periódicamente estos términos para estar al tanto de cualquier cambio.

7. CONTACTO

7.1. Si tienes alguna pregunta o comentario sobre estos Términos y Condiciones, puedes contactarnos en **[admin@medusa.events](mailto:admin@medusa.events)**.

Al utilizar nuestra plataforma, aceptas estos Términos y Condiciones en su totalidad. Te recomendamos imprimir o guardar una copia de estos términos para referencia futura. Gracias por elegir **medusa.events** como tu plataforma para descubrir y reservar eventos emocionantes a través de nuestros Partners.`;

export default function TermsAndConditions() {
  return (
    <InfoPage title="Términos y Condiciones" description="terminos">
      <ReactMarkdown children={markdown} />
    </InfoPage>
  );
}
