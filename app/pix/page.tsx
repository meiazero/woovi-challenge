import { ChevronUpIcon, CopyIcon } from "lucide-react";

export default function PixPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold text-center">João, pague a entrada de R$ 15.300,00 pelo Pix</h1>
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="border-2 size-[350px] border-[#03D69D] rounded-[10px] flex items-center justify-center">
            <img src="/qrcode.png" alt="Qrcode de pagamento" />
          </div>

          <button type="button" className="bg-[#133A6F] text-zinc-50 px-5 py-2 rounded-md flex items-center justify-center font-semibold">
            Clique para copiar QR CODE
            <CopyIcon className="ms-2" />
          </button>

          <div className="space-y-px font-semibold">
            <p className="text-sm text-zinc-400">Prazo de pagamento: </p>
            <p className="text-sm font-extrabold text-zinc-700">15/12/2021 - 08:17</p>
          </div>
        </div>

        <div className="space-y-4 relative">
          <div className="flex flex-row items-center justify-between gap-5">
            {/* circle */}
            <div className="border-2 size-4 border-[#03D69D] rounded-full" />
            <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
              <p className="font-semibold ">1ª entrada no Pix</p>
              <p className="font-extrabold">R$ 15.300,00</p>
            </div>
          </div>
          <div className="absolute bg-zinc-300 h-7 w-[2px] top-1.5 left-[7px]" />

          <div className="flex flex-row items-center justify-between gap-5">
            {/* circle */}
            <div className="border-2 size-4 border-zinc-300 rounded-full" />
            <div className="flex flex-1 flex-row justify-between text-lg text-zinc-700">
              <p className="font-semibold ">2ª no cartão</p>
              <p className="font-extrabold">R$ 15.300,00</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-200 h-0.5 w-full" />

        <div className="flex flex-row items-center justify-between font-semibold">
          <p className="text-sm">CET: 0,5%</p>
          <p className="text-xl">
            Total: R$ 30.600,00
          </p>
        </div>

        <div className="bg-zinc-200 h-0.5 w-full" />

        <div className="flex flex-row justify-between items-center">
          <p className="">
            Como funciona?
          </p>
          <ChevronUpIcon className="w-3 h-auto" />
        </div>

        <div className="bg-zinc-200 h-0.5 w-full" />

        <div className="spce-y-px text-center">
          <p className="font-semibold text-zinc-400">Identificador:</p>
          <p className="font-extrabold text-zinc-700">
            2c1b951f356c4680b13ba1c9fc889c47
          </p>
        </div>
      </div>
    </div>
  )
}