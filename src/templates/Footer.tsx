import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../components/background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const CLEAR_TEXT = 'text-gray-400';

const svgStyle = {
  width: '4rem',
  height: '4rem',
};
const Footer = () => (
  <div className="mt-auto">
    <Background color="bg-gray-700">
      <Section>
        <CenteredFooter
          logo={<Logo />}
          iconList={
            <>
              <Link href="/">
                <a className="box-border m-4">
                  <svg
                    style={svgStyle}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </Link>

              <Link href="mailto:javier@medusa.events?" target="_blank">
                <a className="box-border m-4">
                  <svg
                    style={svgStyle}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z" />
                  </svg>
                </a>
              </Link>

              <Link href="/">
                <a className="box-border m-4">
                  <svg
                    style={svgStyle}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                  </svg>
                </a>
              </Link>
            </>
          }
        >
          <li>
            <Link href="/">
              <a className={CLEAR_TEXT}>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre-nosotros">
              <a className={CLEAR_TEXT}>Sobre Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={CLEAR_TEXT}>Contacto</a>
            </Link>
          </li>
          <li>
            <Link href="/politicas-privacidad">
              <a className={CLEAR_TEXT}>Políticas de Privacidad & Cookies</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              <a className={CLEAR_TEXT}>Términos & Condiciones</a>
            </Link>
          </li>
        </CenteredFooter>
      </Section>
    </Background>
  </div>
);

export { Footer };
