
import { Flag } from '@/components/svg/flag';
import { cn } from '@/utils/cn';
import { CircleIcon } from 'lucide-react';

const pixParcelado: Array<{
  parcela: string,
  valor: string,
  total: string,
  banner: boolean
}> = [
    {
      parcela: "2x",
      valor: "R$ 15.300,00",
      total: "R$ 30.600,00",
      banner: false
    },
    {
      parcela: "3x",
      valor: "R$ 10.196,66",
      total: "R$ 30.620,00",
      banner: false
    },
    {
      parcela: "4x",
      valor: "R$ 7.725,00",
      total: "R$ 30.900,00",
      banner: true
    },
    {
      parcela: "5x",
      valor: "R$ 6.300,00",
      total: "R$ 31.500,00",
      banner: false
    },
    {
      parcela: "6x",
      valor: "R$ 5.283,33",
      total: "R$ 31699,98",
      banner: false
    },
    {
      parcela: "7x",
      valor: "R$ 4.542,85",
      total: "R$ 31.800,00",
      banner: false
    }
  ]

export default function HomePage() {
  return (
    <div className='space-y-8'>
      <div className="relative">
        <span className='absolute capitalize bg-zinc-200 font-extrabold text-lg px-5 py-px rounded-full left-5 -top-3'>pix</span>
        <div className='border-2 border-zinc-200 rounded-[10px] shadow-none'>
          <div className='p-5'>
            <div className="flex flex-row items-center justify-between">
              <p className="text-2xl font-semibold">
                <span className='font-extrabold'>1x</span> {" "}
                R$ 30.500,00
              </p>
              <CircleIcon className="text-zinc-300 size-6" />
            </div>
            <p className="text-[#03D69D] text-base">
              Ganhe {" "}
              <span className='font-extrabold'>3%</span> de Cashback
            </p>

            <div className="pt-1 relative">
              <Flag className='text-[#133A6F] w-full h-auto' />
              <p className='font-semibold text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full ps-2 pt-1'>
                🤑 {" "}
                <span>R$ 300,00</span> {" "}
                de volta no seu Pix na hora
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" id='pix-parcelado'>
        <span className='absolute capitalize bg-zinc-200 font-extrabold text-lg px-5 py-px rounded-full left-5 -top-3'>pix parcelado</span>

        <div className="">
        {pixParcelado.map((pix, index) => (
          <div key={index} className={cn("card", index === 0 && "selected")}>
            <div className='p-5'>
              <div className="flex flex-row items-center justify-between">
                <p className="text-2xl font-semibold">
                  <span className='font-extrabold'>{pix.parcela}</span> {" "}
                  {pix.valor}
                </p>
                <CircleIcon className="text-zinc-300 size-6" />
              </div>
              <p className="text-zinc-400 text-base font-semibold">
                Total: {pix.total}
              </p>

              {pix.banner && (
                <div className="pt-1 relative">
                <Flag className='text-[#133A6F] w-full h-auto' />
                <p className='font-semibold text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full ps-2 pt-1'>
                  <span>-3% de juros:</span> {" "}
                  Melhor opção de parcelamento
                </p>
              </div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>

    </div>
  );
}
