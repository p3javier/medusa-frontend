import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="¿Eres proveedor de servicios, tienes una sala de fiestas o un hotel y quieres anunciarte en nuestra plataforma?"
      subtitle="¡No dudes en contactar con nosotros!"
      button={
        <Link href="/contacto">
          <a>
            <Button>Contacto</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
