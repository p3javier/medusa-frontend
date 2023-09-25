export const CartServiceCell = ({ title }: { title: string | undefined }) => {
  return <div>{title || 'Loading...'}</div>;
};
