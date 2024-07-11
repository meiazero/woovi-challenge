import { Flag } from "@/components/svg/flag";
import { cn } from "@/utils/cn";
import { Box } from "@mui/material";
import { CircleCheckIcon, CircleIcon } from "lucide-react";

interface OptionCardProps {
  card: {
    parcela: string,
    valor: string,
    discount?: string,
    total: string,
    banner: boolean,
    content?: string
  },
  className?: string
  checked: boolean,
  onSelect?: () => void
}

export function OptionCard({ card, className, onSelect, checked}: OptionCardProps) {

  return (
    <Box
      className={cn("rounded-[10px] border-2 border-zinc-200", checked && 'selected', className)}
      onClick={onSelect}>
      <div className='p-5'>
        <div className="flex flex-row items-center justify-between">
          <p className="text-2xl font-semibold">
            <span className='font-extrabold'>{card.parcela}</span>  {" "}
            R$ {card.valor}
          </p>
          {checked ? (
            <CircleCheckIcon className="size-6 fill-[#03D69D] text-zinc-50" />
          ) : (
            <CircleIcon className="text-zinc-300 size-6" />
          )}
        </div>

        {card.discount ? (
          <p className="text-[#03D69D] text-base">
            {card.discount}
          </p>
        ) : (
          <p className="text-zinc-400 text-base font-semibold">
            Total:  R$ {" "} {card.total}
          </p>
        )}

        {card.banner && (
          <div className="pt-1 relative">
            <Flag className='text-[#133A6F] w-full h-auto' />
            <p className='font-semibold text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full ps-2 pt-1'>
              {card.content}
            </p>
          </div>
        )}
      </div>
    </Box>
  )
}