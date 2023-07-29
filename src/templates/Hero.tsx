/* eslint-disable import/order */
import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import UserBox from '../userBox/UserBox';

const Hero = () => (
  <Background color="bg-violet-900">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <UserBox />
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
