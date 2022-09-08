import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const LinkElem = ({ children }: { children: JSX.Element }) => {
  return <li className="border p-1 rounded">{children}</li>;
};
const Hero = () => (
  <Background color="bg-violet-900">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <LinkElem>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a className="text-violet-200">Registrarse</a>
          </Link>
        </LinkElem>
        <LinkElem>
          <Link href="/">
            <a className="text-violet-200">Acceder</a>
          </Link>
        </LinkElem>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'La nueva forma de\n'}
            <span className="text-primary-500">organizar tu despedida</span>
          </>
        }
        description="La forma más sencilla y rápida de organizar tu despedida de soltero/a"
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Reserva y obten un descuento</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
