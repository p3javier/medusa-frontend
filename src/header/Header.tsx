import { useState } from 'react';

import Link from 'next/link';

import BurgerMenu from '../burgerMenu/BurgerMenu';
import CartWidget from '../cartWidget/CartWidget';
import { HeaderButton } from '../components/headerButton/HeaderButton';
import { Logo } from '../templates/Logo';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div>
      <nav className="xl:flex hidden flex-row flex-nowrap gap-x-6 mx-20">
        <div className="pb-4 pt-5">
          <Logo xl />
        </div>
        <HeaderButton title="Inicio" href="/" />
        <HeaderButton title="Eventos" href="/catalogo" />
        <HeaderButton title="Sobre Nosotros" href="/sobre-nosotros" />
        <HeaderButton title="Contacto" href="/contacto" />
        <div className="grow">
          <CartWidget xl />
        </div>
      </nav>
      <nav className="xl:hidden flex mx-5 gap-x-6">
        <Link href="/">
          <div className="pb-1 pt-3">
            <Logo />
          </div>
        </Link>
        <div className="grow">
          <CartWidget />
        </div>
        <div aria-controls="navbar-default" aria-expanded="false">
          <BurgerMenu onClick={() => setMenuVisible(!menuVisible)} />
        </div>
      </nav>
      <div
        className={`z-50 ${
          menuVisible ? 'absolute' : 'hidden'
        } w-screen md:hidden md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
          <li>
            <HeaderButton isMobile title="Inicio" href="/" />
          </li>
          <li>
            <HeaderButton isMobile title="Eventos" href="/catalogo" />
          </li>
          <li>
            <HeaderButton
              isMobile
              title="Sobre Nosotros"
              href="/sobre-nosotros"
            />
          </li>
          <li>
            <HeaderButton isMobile title="Contacto" href="/contacto" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
