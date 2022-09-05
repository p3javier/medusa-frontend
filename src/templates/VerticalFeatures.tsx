import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Nuestros Servicios"
    description="Una sencilla app con la que podrás crear el pack ideal de eventos para tu proxima despedida"
  >
    <VerticalFeatureRow
      title="Salas de Fiesta"
      description="Encuentra las mejores salas de fiesta con espectaculos incluidos."
      image="/assets/images/club.jpg"
      imageAlt="Sala de fiesta"
    />
    <VerticalFeatureRow
      title="Eventos al aire libre"
      description="Escalada, paintball, karting y muchos más tipos de eventos diurnos son también una gran opción para una despedida."
      image="/assets/images/aire-libre.jpg"
      imageAlt="Personas escalando"
      reverse
    />
    <VerticalFeatureRow
      title="Limusinas"
      description="¿Que mejor que darse un paseo en limusina por la ciudad antes de salir de fiesta?"
      image="/assets/images/limo.jpg"
      imageAlt="Limusina Hummer"
    />
  </Section>
);

export { VerticalFeatures };
