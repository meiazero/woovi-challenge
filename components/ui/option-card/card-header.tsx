import { CircleCheckIcon, CircleIcon } from "lucide-react"

interface OptionCardHeaderProps {
  parcela: string,
  valor: string
  selected?: boolean
}

export function OptionCardHeader({ parcela, valor, selected = false }: OptionCardHeaderProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-2xl font-semibold">
        <span className='font-extrabold'>{parcela}</span> {" "}
        R$ {valor}
      </p>
      {selected ?
         <CircleCheckIcon className="size-6 fill-[#03D69D] text-zinc-50" />
        : <CircleIcon className="text-zinc-300 size-6" />
      }
    </div>
  )
}
