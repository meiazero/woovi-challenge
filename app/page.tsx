import { OptionCard } from '@/components/ui/option-card';

interface InformationCard {
  parcela: string,
  valor: string,
  discount?: string,
  total: string,
  banner: boolean
  content?: string
}

const pixAVista: InformationCard = {
  parcela: "1x",
  valor: "R$ 30.500,00",
  total: "R$ 30.500,00",
  discount: "Ganhe 3% de cashback",
  banner: true,
  content: "🤑 R$ 300,00 de volta no seu Pix na hora"
}

const pixParcelado: Array<InformationCard> = [
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
      banner: true,
      content: "-3% de juros: Melhor opção de parcelamento"
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
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold text-center">João, como você quer pagar?</h1>
      <div className='space-y-8'>
        <div className="relative">
          <span className='absolute capitalize bg-zinc-200 font-extrabold text-lg px-5 py-px rounded-full left-5 -top-3'>pix</span>
          <OptionCard card={pixAVista} />
        </div>

        <div className="relative" id='pix-parcelado'>
          <span className='absolute capitalize bg-zinc-200 font-extrabold text-lg px-5 py-px rounded-full left-5 -top-3'>pix parcelado</span>

          <div className="">
            {pixParcelado.map((pix, index) => (
              <OptionCard key={index} card={pix} className='group-card' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
