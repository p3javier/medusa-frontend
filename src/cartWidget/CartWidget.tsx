import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

import { CartWidgetItemsNumber } from './CartWidgetItemsNumber';

const CartWidget = ({ xl }: { xl?: boolean }) => (
  <div className="flex justify-end">
    <Link href="/resumen-de-pedidos">
      <a className="flex rounded-lg flex-row border md:p-3 p-1 md:gap-4 gap-2 shadow-md shadow-black hover:shadow-lg hover:brightness-125 hover:shadow-slate-600 hover:backdrop-brightness-125 transition-all">
        <FaCartShopping size={xl ? '3rem' : '1rem'} className="mt-2" />
        <CartWidgetItemsNumber xl={xl} />
      </a>
    </Link>
  </div>
);

export default CartWidget;
