import Link from 'next/link';

export const CardFooter = () => {
  return (
    <div>
      <Link href="/test">
        <div className="mx-4 transition delay-100 text-2xl font-extrabold hover:underline text-amber-300 hover:scale-105 active:scale-100 cursor-pointer">
          Detalles {'>'}
        </div>
      </Link>
    </div>
  );
};
