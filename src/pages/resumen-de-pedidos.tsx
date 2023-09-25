import React from 'react';

import CartTable from '../cartTable/CartTable';
import { Section } from '../layout/Section';
import RequestOrder from '../requestOrder/RequestOrder';
import { getClient } from '../sanity/client';
import { cartEventsQuery } from '../sanity/queries';
import { Base } from '../templates/Base';
import { BaseEvent } from '../types';

export const getStaticProps = async () => {
  const preview = process.env.NODE_ENV === 'development';
  const client = getClient(preview);

  try {
    const cartEvents = await client.fetch(cartEventsQuery);
    return { props: { cartEvents } };
  } catch (error) {
    console.log(error); // cambiar esto
    throw error;
  }
};
export default function OrdersSummary({
  cartEvents,
}: {
  cartEvents: BaseEvent[];
}) {
  return (
    <Base
      metaTitle="Resumen de pedidos"
      description="Cesta de la compra de Medusa Events"
    >
      <Section title="Resumen de pedidos">
        <div className="justify-center flex flex-col md:flex-row my-8">
          <CartTable eventsList={cartEvents} />
          <RequestOrder />
        </div>
      </Section>
    </Base>
  );
}
