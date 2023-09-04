import CartWidget from '../cartWidget/CartWidget';
import { HeaderButton } from '../components/headerButton/HeaderButton';
import { Logo } from '../templates/Logo';

const Header = () => {
  return (
    <nav className="flex flex-row flex-nowrap gap-x-6 mx-20">
      <div className="pb-4 pt-5">
        <Logo xl />
      </div>
      <HeaderButton title="Inicio" href="/" />
      <HeaderButton title="Eventos" href="/catalogo" />
      <HeaderButton title="Sobre Nosotros" href="/sobre-nosotros" />
      <HeaderButton title="Contacto" href="/contacto" />
      <div className="grow">
        <CartWidget />
      </div>
    </nav>
  );
};

export { Header };
