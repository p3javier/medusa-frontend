import Link from 'next/link';
import { FaCartShopping } from 'react-icons/fa6';

import { CartWidgetItemsNumber } from './CartWidgetItemsNumber';

const CartWidget = () => (
  <div className="flex justify-end">
    <Link href="/cesta">
      <a className="flex rounded-lg flex-row border p-3 gap-4 shadow-md shadow-black hover:shadow-lg hover:brightness-125 hover:shadow-slate-600 hover:backdrop-brightness-125 transition-all">
        <FaCartShopping size="3rem" />
        <CartWidgetItemsNumber />
      </a>
    </Link>
  </div>
);

export default CartWidget;
