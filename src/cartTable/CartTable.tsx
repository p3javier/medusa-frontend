import { CartTableBody } from './CartTableBody';
import { BaseEvent } from '../types';

const TH_STYLES = 'pl-3 md:px-5 py-3';
const CartTable = ({ eventsList }: { eventsList: BaseEvent[] }) => {
  return (
    <div className="md:mr-8">
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className={TH_STYLES}>
                Servicio
              </th>
              <th scope="col" className={TH_STYLES}>
                Asistentes/ Comensales
              </th>
              <th scope="col" className={TH_STYLES}>
                Precio reserva (unidad)
              </th>
              <th scope="col" className={TH_STYLES}>
                Precio reserva (total)
              </th>
            </tr>
          </thead>
          <CartTableBody eventsList={eventsList} />
        </table>
      </div>
    </div>
  );
};

export default CartTable;
