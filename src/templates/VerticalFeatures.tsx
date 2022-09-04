import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Medusa Events"
    description="Una sencilla app con la que podrás crear el pack ideal de eventos para tu proxima despedida"
  >
    <VerticalFeatureRow
      title="Salas de Fiesta"
      description="Encuentra las mejores salas de fiesta con espectaculos incluidos."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Eventos al aire libre"
      description="Escalada, paintball, karting y muchos más tipos de eventos diurnos son también una gran opción para una despedida."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Limusinas"
      description="¿Que mejor que darse un paseo en limusina por la ciudad antes de salir de fiesta?"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
